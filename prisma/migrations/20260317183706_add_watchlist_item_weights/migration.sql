-- CreateTable
CREATE TABLE "WatchlistItemWeight" (
    "id" TEXT NOT NULL,
    "watchlistItemId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WatchlistItemWeight_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "WatchlistItemWeight"
ADD CONSTRAINT "WatchlistItemWeight_weight_check"
CHECK ("weight" >= 1 AND "weight" <= 5);

-- CreateIndex
CREATE INDEX "WatchlistItemWeight_watchlistItemId_idx" ON "WatchlistItemWeight"("watchlistItemId");

-- CreateIndex
CREATE INDEX "WatchlistItemWeight_userId_idx" ON "WatchlistItemWeight"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "WatchlistItemWeight_watchlistItemId_userId_key" ON "WatchlistItemWeight"("watchlistItemId", "userId");

-- AddForeignKey
ALTER TABLE "WatchlistItemWeight" ADD CONSTRAINT "WatchlistItemWeight_watchlistItemId_fkey" FOREIGN KEY ("watchlistItemId") REFERENCES "WatchlistItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistItemWeight" ADD CONSTRAINT "WatchlistItemWeight_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
