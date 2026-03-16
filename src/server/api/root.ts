import { featuresRouter } from "~/server/api/routers/features";
import { invitesRouter } from "~/server/api/routers/invites";
import { itemsRouter } from "~/server/api/routers/items";
import { mediaRouter } from "~/server/api/routers/media";
import { membersRouter } from "~/server/api/routers/members";
import { watchlistsRouter } from "~/server/api/routers/watchlists";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  features: featuresRouter,
  invites: invitesRouter,
  items: itemsRouter,
  media: mediaRouter,
  members: membersRouter,
  watchlists: watchlistsRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
