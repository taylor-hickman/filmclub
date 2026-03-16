import { TRPCError } from "@trpc/server";
import { describe, expect, it, vi } from "vitest";

import {
  requireWatchlistMembership,
  requireWatchlistOwner,
} from "~/features/watchlists/server/access";

describe("watchlist permissions", () => {
  it("rejects users without membership", async () => {
    const database = {
      featureMembership: {
        findUnique: vi.fn().mockResolvedValue(null),
      },
      watchlist: {
        findUnique: vi.fn().mockResolvedValue({
          id: "watchlist_1",
          featureInstanceId: "feature_1",
          mediaType: "MOVIE",
          name: "Weekend queue",
          featureInstance: {
            ownerId: "user_9",
          },
        }),
      },
    };

    await expect(
      requireWatchlistMembership(database, "user_1", "watchlist_1"),
    ).rejects.toBeInstanceOf(TRPCError);
  });

  it("allows owners through the owner guard", async () => {
    const database = {
      featureMembership: {
        findUnique: vi.fn().mockResolvedValue({
          role: "OWNER",
          featureInstance: {
            id: "feature_1",
            featureKey: "WATCHLIST",
            ownerId: "user_1",
          },
        }),
      },
      watchlist: {
        findUnique: vi.fn().mockResolvedValue({
          id: "watchlist_1",
          featureInstanceId: "feature_1",
          mediaType: "MOVIE",
          name: "Weekend queue",
          featureInstance: {
            ownerId: "user_1",
          },
        }),
      },
    };

    await expect(
      requireWatchlistOwner(database, "user_1", "watchlist_1"),
    ).resolves.toMatchObject({
      role: "OWNER",
    });
  });
});
