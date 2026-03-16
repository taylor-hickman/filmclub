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
    db.watchlist.findUnique.mockResolvedValue({
      id: WATCHLIST_ID,
      featureInstanceId: FEATURE_INSTANCE_ID,
      mediaType: WatchlistMediaType.TV,
      name: "Weekend queue",
      featureInstance: {
        ownerId: "user_1",
      },
    } as any);
    db.featureMembership.findUnique.mockResolvedValue({
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
    } as any);
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

  it("returns stored item data and generic membership data on watchlist details", async () => {
    db.userFeature.upsert.mockResolvedValue({
      id: "user_feature_1",
      userId: "user_1",
      featureKey: FeatureKey.WATCHLIST,
      enabledAt: new Date(),
      lastVisitedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    db.watchlist.findUnique.mockResolvedValue({
      id: WATCHLIST_ID,
      featureInstanceId: FEATURE_INSTANCE_ID,
      mediaType: WatchlistMediaType.MOVIE,
      name: "Weekend queue",
      featureInstance: {
        ownerId: "user_1",
      },
    } as any);
    db.featureMembership.findUnique.mockResolvedValue({
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
    } as any);
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
          id: ITEM_ID,
          watchlistId: WATCHLIST_ID,
          tmdbId: movieDetails.tmdbId,
          position: 0,
          status: WatchlistItemStatus.QUEUED,
          note: "Queue it",
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
          title: movieDetails.title,
          creditNames: movieDetails.creditNames,
        },
      ],
    });
  });
});
