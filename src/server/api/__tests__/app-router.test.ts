import { TRPCError } from "@trpc/server";
import { type Session } from "next-auth";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { mockDeep, mockReset, type DeepMockProxy } from "vitest-mock-extended";

import {
  FeatureKey,
  FeatureMembershipRole,
  Prisma,
  PrismaClient,
  WatchlistItemStatus,
  WatchlistMediaType,
} from "../../../../generated/prisma";
import { appRouter } from "~/server/api/root";

const mocks = vi.hoisted(() => ({
  sendFeatureInviteEmail: vi.fn(),
  getMediaDetails: vi.fn(),
  searchMedia: vi.fn(),
}));

vi.mock("~/server/email", () => ({
  sendFeatureInviteEmail: mocks.sendFeatureInviteEmail,
}));

vi.mock("~/server/auth", () => ({
  auth: vi.fn(),
  signIn: vi.fn(),
  signOut: vi.fn(),
  handlers: {
    GET: vi.fn(),
    POST: vi.fn(),
  },
}));

vi.mock("~/server/tmdb", () => ({
  getMediaDetails: mocks.getMediaDetails,
  searchMedia: mocks.searchMedia,
}));

type Context = {
  db: PrismaClient;
  session: Session | null;
  headers: Headers;
};

const FEATURE_INSTANCE_ID = "cjld2bjxh0000qzrmn831i7ra";
const WATCHLIST_ID = "cjld2cjxh0000qzrmn831i7rn";
const MEMBERSHIP_ID = "cjld2d1s00001qzrmn831i7ro";
const ITEM_ID = "cjld2e1s00003qzrmn831i7rq";
const INVITE_ID = "cjld2f1s00005qzrmn831i7rs";
const MEMBER_USER_ID = "cjld2g1s00007qzrmn831i7rt";

const movieDetails = {
  tmdbId: 15,
  mediaType: "MOVIE" as const,
  title: "The Thing",
  creditNames: "John Carpenter",
  overview: "Isolation and paranoia.",
  posterPath: "/thing.jpg",
  backdropPath: "/thing-backdrop.jpg",
  year: 1982,
};

const tvDetails = {
  tmdbId: 1399,
  mediaType: "TV" as const,
  title: "Game of Thrones",
  creditNames: "David Benioff, D. B. Weiss",
  overview: "Winter is coming.",
  posterPath: "/got.jpg",
  backdropPath: "/got-backdrop.jpg",
  year: 2011,
};

const createSession = (): Session => ({
  expires: "2099-01-01T00:00:00.000Z",
  user: {
    id: "user_1",
    email: "owner@example.com",
    name: "Owner",
    image: null,
  },
});

const createCaller = (
  db: PrismaClient,
  session: Session | null = createSession(),
) =>
  appRouter.createCaller({
    db,
    session,
    headers: new Headers([["origin", "http://localhost:3000"]]),
  } satisfies Context);

function mockWatchlistAccess(
  db: DeepMockProxy<PrismaClient>,
  {
    userId = "user_1",
    ownerId = "user_1",
    role = FeatureMembershipRole.OWNER,
    mediaType = WatchlistMediaType.MOVIE,
  }: {
    userId?: string;
    ownerId?: string;
    role?: FeatureMembershipRole;
    mediaType?: WatchlistMediaType;
  } = {},
) {
  db.watchlist.findUnique.mockResolvedValue({
    id: WATCHLIST_ID,
    featureInstanceId: FEATURE_INSTANCE_ID,
    mediaType,
    name: "Weekend queue",
    featureInstance: {
      ownerId,
    },
  } as any);
  db.featureMembership.findUnique.mockResolvedValue({
    id: MEMBERSHIP_ID,
    featureInstanceId: FEATURE_INSTANCE_ID,
    userId,
    role,
    createdAt: new Date(),
    updatedAt: new Date(),
    featureInstance: {
      id: FEATURE_INSTANCE_ID,
      featureKey: FeatureKey.WATCHLIST,
      ownerId,
    },
  } as any);
}

describe("app router", () => {
  let db: DeepMockProxy<PrismaClient>;

  beforeEach(() => {
    db = mockDeep<PrismaClient>();
    mockReset(db);
    mocks.sendFeatureInviteEmail.mockReset();
    mocks.sendFeatureInviteEmail.mockResolvedValue(undefined);
    mocks.getMediaDetails.mockReset();
    mocks.getMediaDetails.mockResolvedValue(movieDetails);
    mocks.searchMedia.mockReset();
    mocks.searchMedia.mockResolvedValue([]);

    db.$transaction.mockImplementation(async (input: unknown) => {
      if (typeof input === "function") {
        return input(db);
      }

      if (Array.isArray(input)) {
        return Promise.all(input);
      }

      return input;
    });
  });

  it("creates a watchlist with a feature instance, owner membership, and user feature state", async () => {
    db.userFeature.upsert.mockResolvedValue({
      id: "user_feature_1",
      userId: "user_1",
      featureKey: FeatureKey.WATCHLIST,
      enabledAt: new Date(),
      lastVisitedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    db.featureInstance.create.mockResolvedValue({
      id: FEATURE_INSTANCE_ID,
      featureKey: FeatureKey.WATCHLIST,
      ownerId: "user_1",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    db.featureMembership.create.mockResolvedValue({
      id: MEMBERSHIP_ID,
      featureInstanceId: FEATURE_INSTANCE_ID,
      userId: "user_1",
      role: FeatureMembershipRole.OWNER,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    db.watchlist.create.mockResolvedValue({
      id: WATCHLIST_ID,
      featureInstanceId: FEATURE_INSTANCE_ID,
      name: "Sci-fi night",
      description: null,
      mediaType: WatchlistMediaType.MOVIE,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const caller = createCaller(db);
    const result = await caller.watchlists.create({
      name: "Sci-fi night",
      mediaType: "MOVIE",
    });

    expect(result).toMatchObject({
      id: WATCHLIST_ID,
      mediaType: WatchlistMediaType.MOVIE,
    });
    expect(db.userFeature.upsert).toHaveBeenCalled();
    expect(db.featureInstance.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          featureKey: FeatureKey.WATCHLIST,
        }),
      }),
    );
    expect(db.featureMembership.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          role: FeatureMembershipRole.OWNER,
        }),
      }),
    );
  });

  it("blocks non-owners from inviting collaborators", async () => {
    db.watchlist.findUnique.mockResolvedValue({
      id: WATCHLIST_ID,
      featureInstanceId: FEATURE_INSTANCE_ID,
      mediaType: WatchlistMediaType.MOVIE,
      name: "Weekend queue",
      featureInstance: {
        ownerId: "user_2",
      },
    } as any);
    db.featureMembership.findUnique.mockResolvedValue({
      id: MEMBERSHIP_ID,
      featureInstanceId: FEATURE_INSTANCE_ID,
      userId: "user_1",
      role: FeatureMembershipRole.MEMBER,
      createdAt: new Date(),
      updatedAt: new Date(),
      featureInstance: {
        id: FEATURE_INSTANCE_ID,
        featureKey: FeatureKey.WATCHLIST,
        ownerId: "user_2",
      },
    } as any);

    const caller = createCaller(db);

    await expect(
      caller.members.invite({
        watchlistId: WATCHLIST_ID,
        email: "friend@example.com",
      }),
    ).rejects.toBeInstanceOf(TRPCError);
  });

  it("accepts a valid invite and creates a feature membership", async () => {
    db.featureInvite.findUnique.mockResolvedValue({
      id: INVITE_ID,
      featureInstanceId: FEATURE_INSTANCE_ID,
      featureKey: FeatureKey.WATCHLIST,
      inviterId: "user_9",
      email: "owner@example.com",
      tokenHash: "hashed-token",
      createdAt: new Date(),
      updatedAt: new Date(),
      expiresAt: new Date(Date.now() + 60_000),
      acceptedAt: null,
      revokedAt: null,
      featureInstance: {
        id: FEATURE_INSTANCE_ID,
        featureKey: FeatureKey.WATCHLIST,
        watchlist: {
          id: WATCHLIST_ID,
        },
      },
    } as any);
    db.featureMembership.findUnique.mockResolvedValue(null);
    db.featureMembership.create.mockResolvedValue({
      id: MEMBERSHIP_ID,
      featureInstanceId: FEATURE_INSTANCE_ID,
      userId: "user_1",
      role: FeatureMembershipRole.MEMBER,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    db.userFeature.upsert.mockResolvedValue({
      id: "user_feature_1",
      userId: "user_1",
      featureKey: FeatureKey.WATCHLIST,
      enabledAt: new Date(),
      lastVisitedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    db.featureInvite.update.mockResolvedValue({
      id: INVITE_ID,
      featureInstanceId: FEATURE_INSTANCE_ID,
      featureKey: FeatureKey.WATCHLIST,
      inviterId: "user_9",
      email: "owner@example.com",
      tokenHash: "hashed-token",
      createdAt: new Date(),
      updatedAt: new Date(),
      expiresAt: new Date(Date.now() + 60_000),
      acceptedAt: new Date(),
      revokedAt: null,
    });

    const caller = createCaller(db);
    const result = await caller.invites.accept({
      token: "valid-token-string-12345",
    });

    expect(result).toEqual({
      success: true,
      featureKey: FeatureKey.WATCHLIST,
      redirectPath: `/app/watchlists/${WATCHLIST_ID}`,
    });
    expect(db.featureMembership.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          role: FeatureMembershipRole.MEMBER,
        }),
      }),
    );
    expect(db.userFeature.upsert).toHaveBeenCalled();
  });

  it("returns a conflict when the same TV title is added twice", async () => {
    mockWatchlistAccess(db, { mediaType: WatchlistMediaType.TV });
    db.watchlistItem.count.mockResolvedValue(0);
    mocks.getMediaDetails.mockResolvedValue(tvDetails);
    db.watchlistItem.create.mockRejectedValue(
      new Prisma.PrismaClientKnownRequestError("duplicate", {
        code: "P2002",
        clientVersion: "6.19.2",
      }),
    );

    const caller = createCaller(db);

    await expect(
      caller.items.add({
        watchlistId: WATCHLIST_ID,
        tmdbId: tvDetails.tmdbId,
      }),
    ).rejects.toMatchObject({
      code: "CONFLICT",
      message: "That title is already on this watchlist.",
    });
  });

  it("adds a title without creating an initial weight", async () => {
    mockWatchlistAccess(db);
    db.watchlistItem.count.mockResolvedValue(0);
    db.watchlistItem.create.mockResolvedValue({
      id: ITEM_ID,
      watchlistId: WATCHLIST_ID,
      tmdbId: movieDetails.tmdbId,
      position: 0,
      status: WatchlistItemStatus.QUEUED,
      note: "",
      title: movieDetails.title,
      creditNames: movieDetails.creditNames,
      year: movieDetails.year,
      posterPath: movieDetails.posterPath,
      backdropPath: movieDetails.backdropPath,
      overview: movieDetails.overview,
      watchedAt: null,
      addedById: "user_1",
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    const caller = createCaller(db);
    await caller.items.add({
      watchlistId: WATCHLIST_ID,
      tmdbId: movieDetails.tmdbId,
    });

    expect(db.watchlistItem.create).toHaveBeenCalled();
    expect(db.watchlistItem.create.mock.calls[0]?.[0]?.data).not.toHaveProperty(
      "weights",
    );
  });

  it("sets a new weight for a watchlist item", async () => {
    mockWatchlistAccess(db);
    db.watchlistItem.findUniqueOrThrow.mockResolvedValue({
      id: ITEM_ID,
      watchlistId: WATCHLIST_ID,
    } as any);
    db.watchlistItemWeight.upsert.mockResolvedValue({
      id: "weight_1",
      watchlistItemId: ITEM_ID,
      userId: "user_1",
      weight: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    const caller = createCaller(db);
    const result = await caller.items.setWeight({
      itemId: ITEM_ID,
      weight: 4,
    });

    expect(result).toEqual({ success: true });
    expect(db.watchlistItemWeight.upsert).toHaveBeenCalledWith({
      where: {
        watchlistItemId_userId: {
          watchlistItemId: ITEM_ID,
          userId: "user_1",
        },
      },
      create: {
        watchlistItemId: ITEM_ID,
        userId: "user_1",
        weight: 4,
      },
      update: {
        weight: 4,
      },
    });
  });

  it("updates an existing weight for a watchlist item", async () => {
    mockWatchlistAccess(db);
    db.watchlistItem.findUniqueOrThrow.mockResolvedValue({
      id: ITEM_ID,
      watchlistId: WATCHLIST_ID,
    } as any);
    db.watchlistItemWeight.upsert.mockResolvedValue({
      id: "weight_1",
      watchlistItemId: ITEM_ID,
      userId: "user_1",
      weight: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    const caller = createCaller(db);
    await caller.items.setWeight({
      itemId: ITEM_ID,
      weight: 2,
    });

    expect(db.watchlistItemWeight.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        update: {
          weight: 2,
        },
      }),
    );
  });

  it("clears a user weight from a watchlist item", async () => {
    mockWatchlistAccess(db);
    db.watchlistItem.findUniqueOrThrow.mockResolvedValue({
      id: ITEM_ID,
      watchlistId: WATCHLIST_ID,
    } as any);
    db.watchlistItemWeight.deleteMany.mockResolvedValue({ count: 1 });

    const caller = createCaller(db);
    const result = await caller.items.setWeight({
      itemId: ITEM_ID,
      weight: null,
    });

    expect(result).toEqual({ success: true });
    expect(db.watchlistItemWeight.deleteMany).toHaveBeenCalledWith({
      where: {
        watchlistItemId: ITEM_ID,
        userId: "user_1",
      },
    });
  });

  it("rejects out-of-range weights", async () => {
    const caller = createCaller(db);

    await expect(
      caller.items.setWeight({
        itemId: ITEM_ID,
        weight: 6,
      }),
    ).rejects.toBeInstanceOf(TRPCError);
  });

  it("blocks non-members from setting item weights", async () => {
    db.watchlistItem.findUniqueOrThrow.mockResolvedValue({
      id: ITEM_ID,
      watchlistId: WATCHLIST_ID,
    } as any);
    db.watchlist.findUnique.mockResolvedValue({
      id: WATCHLIST_ID,
      featureInstanceId: FEATURE_INSTANCE_ID,
      mediaType: WatchlistMediaType.MOVIE,
      name: "Weekend queue",
      featureInstance: {
        ownerId: "user_1",
      },
    } as any);
    db.featureMembership.findUnique.mockResolvedValue(null);

    const caller = createCaller(db);

    await expect(
      caller.items.setWeight({
        itemId: ITEM_ID,
        weight: 3,
      }),
    ).rejects.toBeInstanceOf(TRPCError);
  });

  it("returns feature cards with enabled state and instance counts", async () => {
    db.userFeature.findMany.mockResolvedValue([
      {
        id: "user_feature_1",
        userId: "user_1",
        featureKey: FeatureKey.WATCHLIST,
        enabledAt: new Date("2026-03-16T12:00:00.000Z"),
        lastVisitedAt: new Date("2026-03-16T13:00:00.000Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    db.featureMembership.findMany.mockResolvedValue([
      {
        featureInstance: {
          featureKey: FeatureKey.WATCHLIST,
        },
      },
    ] as any);

    const caller = createCaller(db);
    const result = await caller.features.list();

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          key: "WATCHLIST",
          enabled: true,
          href: "/app/watchlists",
          instanceCount: 1,
        }),
      ]),
    );
  });

  it("orders watchlist previews by queue priority", async () => {
    db.userFeature.upsert.mockResolvedValue({
      id: "user_feature_1",
      userId: "user_1",
      featureKey: FeatureKey.WATCHLIST,
      enabledAt: new Date(),
      lastVisitedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    db.watchlist.findMany.mockResolvedValue([
      {
        id: WATCHLIST_ID,
        featureInstanceId: FEATURE_INSTANCE_ID,
        name: "Weekend queue",
        description: "A moody queue.",
        mediaType: WatchlistMediaType.MOVIE,
        createdAt: new Date(),
        updatedAt: new Date(),
        featureInstance: {
          owner: {
            id: "user_1",
            name: "Owner",
            email: "owner@example.com",
          },
          memberships: [
            {
              role: FeatureMembershipRole.OWNER,
            },
          ],
          _count: {
            memberships: 2,
          },
        },
        _count: {
          items: 4,
        },
        items: [
          {
            position: 2,
            status: WatchlistItemStatus.QUEUED,
            tmdbId: 101,
            title: "Third Place",
            posterPath: "/third.jpg",
            backdropPath: null,
            weights: [{ userId: "user_2", weight: 3 }],
          },
          {
            position: 1,
            status: WatchlistItemStatus.QUEUED,
            tmdbId: 102,
            title: "Tie Break Winner",
            posterPath: "/tie.jpg",
            backdropPath: null,
            weights: [{ userId: "user_2", weight: 3 }],
          },
          {
            position: 0,
            status: WatchlistItemStatus.QUEUED,
            tmdbId: 103,
            title: "Highest Priority",
            posterPath: "/highest.jpg",
            backdropPath: null,
            weights: [{ userId: "user_1", weight: 5 }],
          },
          {
            position: 3,
            status: WatchlistItemStatus.WATCHED,
            tmdbId: 104,
            title: "Already Watched",
            posterPath: "/watched.jpg",
            backdropPath: null,
            weights: [{ userId: "user_1", weight: 5 }],
          },
        ],
      },
    ] as any);

    const caller = createCaller(db);
    const [watchlist] = await caller.watchlists.list();

    expect(watchlist).toMatchObject({
      id: WATCHLIST_ID,
      previewItems: [
        { title: "Highest Priority" },
        { title: "Tie Break Winner" },
        { title: "Third Place" },
      ],
    });
  });

  it("removes a collaborator's saved weights when they are removed", async () => {
    db.watchlist.findUnique.mockResolvedValue({
      id: WATCHLIST_ID,
      featureInstanceId: FEATURE_INSTANCE_ID,
      mediaType: WatchlistMediaType.MOVIE,
      name: "Weekend queue",
      featureInstance: {
        ownerId: "user_1",
      },
    } as any);
    db.featureMembership.findUnique
      .mockResolvedValueOnce({
        id: MEMBERSHIP_ID,
        featureInstanceId: FEATURE_INSTANCE_ID,
        userId: "user_1",
        role: FeatureMembershipRole.OWNER,
        createdAt: new Date(),
        updatedAt: new Date(),
        featureInstance: {
          id: FEATURE_INSTANCE_ID,
          featureKey: FeatureKey.WATCHLIST,
          ownerId: "user_1",
        },
      } as any)
      .mockResolvedValueOnce({
        id: "membership_2",
        featureInstanceId: FEATURE_INSTANCE_ID,
        userId: MEMBER_USER_ID,
        role: FeatureMembershipRole.MEMBER,
        createdAt: new Date(),
        updatedAt: new Date(),
        featureInstance: {
          id: FEATURE_INSTANCE_ID,
          featureKey: FeatureKey.WATCHLIST,
          ownerId: "user_1",
        },
      } as any);
    db.watchlistItemWeight.deleteMany.mockResolvedValue({ count: 2 });
    db.featureMembership.delete.mockResolvedValue({
      id: "membership_2",
      featureInstanceId: FEATURE_INSTANCE_ID,
      userId: "user_2",
      role: FeatureMembershipRole.MEMBER,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    const caller = createCaller(db);
    const result = await caller.members.remove({
      watchlistId: WATCHLIST_ID,
      userId: MEMBER_USER_ID,
    });

    expect(result).toEqual({ success: true });
    expect(db.watchlistItemWeight.deleteMany).toHaveBeenCalledWith({
      where: {
        userId: MEMBER_USER_ID,
        watchlistItem: {
          watchlistId: WATCHLIST_ID,
        },
      },
    });
  });

  it("returns weighted watchlist details with queue-first ordering", async () => {
    db.userFeature.upsert.mockResolvedValue({
      id: "user_feature_1",
      userId: "user_1",
      featureKey: FeatureKey.WATCHLIST,
      enabledAt: new Date(),
      lastVisitedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    mockWatchlistAccess(db);
    db.watchlist.findUniqueOrThrow.mockResolvedValue({
      id: WATCHLIST_ID,
      featureInstanceId: FEATURE_INSTANCE_ID,
      name: "Weekend queue",
      description: "A moody queue.",
      mediaType: WatchlistMediaType.MOVIE,
      createdAt: new Date(),
      updatedAt: new Date(),
      featureInstance: {
        owner: {
          id: "user_1",
          name: "Owner",
          email: "owner@example.com",
        },
        memberships: [
          {
            id: MEMBERSHIP_ID,
            featureInstanceId: FEATURE_INSTANCE_ID,
            userId: "user_1",
            role: FeatureMembershipRole.OWNER,
            createdAt: new Date(),
            updatedAt: new Date(),
            user: {
              id: "user_1",
              name: "Owner",
              email: "owner@example.com",
              image: null,
            },
          },
        ],
        invites: [
          {
            id: INVITE_ID,
            featureInstanceId: FEATURE_INSTANCE_ID,
            featureKey: FeatureKey.WATCHLIST,
            inviterId: "user_1",
            email: "friend@example.com",
            tokenHash: "invite-token",
            createdAt: new Date(),
            updatedAt: new Date(),
            expiresAt: new Date(Date.now() + 60_000),
            acceptedAt: null,
            revokedAt: null,
          },
        ],
      },
      items: [
        {
          id: "item_high",
          watchlistId: WATCHLIST_ID,
          tmdbId: 100,
          position: 2,
          status: WatchlistItemStatus.QUEUED,
          note: "Top pick",
          title: "Highest Priority",
          creditNames: movieDetails.creditNames,
          year: movieDetails.year,
          posterPath: movieDetails.posterPath,
          backdropPath: movieDetails.backdropPath,
          overview: movieDetails.overview,
          watchedAt: null,
          addedById: "user_1",
          createdAt: new Date(),
          updatedAt: new Date(),
          weights: [
            { userId: "user_1", weight: 5 },
            { userId: "user_2", weight: 1 },
          ],
          addedBy: {
            id: "user_1",
            name: "Owner",
            email: "owner@example.com",
          },
        },
        {
          id: "item_tie_first",
          watchlistId: WATCHLIST_ID,
          tmdbId: 101,
          position: 0,
          status: WatchlistItemStatus.QUEUED,
          note: "",
          title: "Tie Break Winner",
          creditNames: movieDetails.creditNames,
          year: movieDetails.year,
          posterPath: movieDetails.posterPath,
          backdropPath: movieDetails.backdropPath,
          overview: movieDetails.overview,
          watchedAt: null,
          addedById: "user_1",
          createdAt: new Date(),
          updatedAt: new Date(),
          weights: [{ userId: "user_2", weight: 3 }],
          addedBy: {
            id: "user_1",
            name: "Owner",
            email: "owner@example.com",
          },
        },
        {
          id: "item_tie_second",
          watchlistId: WATCHLIST_ID,
          tmdbId: 102,
          position: 1,
          status: WatchlistItemStatus.QUEUED,
          note: "",
          title: "Tie Break Loser",
          creditNames: movieDetails.creditNames,
          year: movieDetails.year,
          posterPath: movieDetails.posterPath,
          backdropPath: movieDetails.backdropPath,
          overview: movieDetails.overview,
          watchedAt: null,
          addedById: "user_1",
          createdAt: new Date(),
          updatedAt: new Date(),
          weights: [{ userId: "user_1", weight: 3 }],
          addedBy: {
            id: "user_1",
            name: "Owner",
            email: "owner@example.com",
          },
        },
        {
          id: ITEM_ID,
          watchlistId: WATCHLIST_ID,
          tmdbId: movieDetails.tmdbId,
          position: 3,
          status: WatchlistItemStatus.WATCHED,
          note: "Queue it",
          title: "Already Watched",
          creditNames: movieDetails.creditNames,
          year: movieDetails.year,
          posterPath: movieDetails.posterPath,
          backdropPath: movieDetails.backdropPath,
          overview: movieDetails.overview,
          watchedAt: null,
          addedById: "user_1",
          createdAt: new Date(),
          updatedAt: new Date(),
          weights: [{ userId: "user_1", weight: 5 }],
          addedBy: {
            id: "user_1",
            name: "Owner",
            email: "owner@example.com",
          },
        },
      ],
    } as any);

    const caller = createCaller(db);
    const result = await caller.watchlists.get({
      watchlistId: WATCHLIST_ID,
    });

    expect(result).toMatchObject({
      id: WATCHLIST_ID,
      viewerRole: FeatureMembershipRole.OWNER,
      owner: {
        email: "owner@example.com",
      },
      members: [
        {
          role: FeatureMembershipRole.OWNER,
        },
      ],
      items: [
        {
          title: "Highest Priority",
          totalWeight: 6,
          weightCount: 2,
          viewerWeight: 5,
        },
        {
          title: "Tie Break Winner",
          totalWeight: 3,
          weightCount: 1,
          viewerWeight: null,
        },
        {
          title: "Tie Break Loser",
          totalWeight: 3,
          weightCount: 1,
          viewerWeight: 3,
        },
        {
          title: "Already Watched",
          totalWeight: 5,
          weightCount: 1,
          viewerWeight: 5,
        },
      ],
    });
  });
});
