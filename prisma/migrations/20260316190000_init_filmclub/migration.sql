-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "FeatureKey" AS ENUM ('WATCHLIST');

-- CreateEnum
CREATE TYPE "FeatureMembershipRole" AS ENUM ('OWNER', 'MEMBER');

-- CreateEnum
CREATE TYPE "WatchlistItemStatus" AS ENUM ('QUEUED', 'WATCHED');

-- CreateEnum
CREATE TYPE "WatchlistMediaType" AS ENUM ('MOVIE', 'TV');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "refresh_token_expires_in" INTEGER,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "UserFeature" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "featureKey" "FeatureKey" NOT NULL,
    "enabledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastVisitedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureInstance" (
    "id" TEXT NOT NULL,
    "featureKey" "FeatureKey" NOT NULL,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeatureInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureMembership" (
    "id" TEXT NOT NULL,
    "featureInstanceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "FeatureMembershipRole" NOT NULL DEFAULT 'MEMBER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeatureMembership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureInvite" (
    "id" TEXT NOT NULL,
    "featureInstanceId" TEXT NOT NULL,
    "featureKey" "FeatureKey" NOT NULL,
    "inviterId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "acceptedAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeatureInvite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Watchlist" (
    "id" TEXT NOT NULL,
    "featureInstanceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "mediaType" "WatchlistMediaType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchlistItem" (
    "id" TEXT NOT NULL,
    "watchlistId" TEXT NOT NULL,
    "tmdbId" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "status" "WatchlistItemStatus" NOT NULL DEFAULT 'QUEUED',
    "note" TEXT NOT NULL DEFAULT '',
    "title" TEXT NOT NULL,
    "creditNames" TEXT,
    "year" INTEGER,
    "posterPath" TEXT,
    "backdropPath" TEXT,
    "overview" TEXT,
    "watchedAt" TIMESTAMP(3),
    "addedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WatchlistItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE INDEX "UserFeature_userId_idx" ON "UserFeature"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserFeature_userId_featureKey_key" ON "UserFeature"("userId", "featureKey");

-- CreateIndex
CREATE INDEX "FeatureInstance_featureKey_ownerId_idx" ON "FeatureInstance"("featureKey", "ownerId");

-- CreateIndex
CREATE INDEX "FeatureMembership_userId_idx" ON "FeatureMembership"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "FeatureMembership_featureInstanceId_userId_key" ON "FeatureMembership"("featureInstanceId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "FeatureInvite_tokenHash_key" ON "FeatureInvite"("tokenHash");

-- CreateIndex
CREATE INDEX "FeatureInvite_featureInstanceId_email_idx" ON "FeatureInvite"("featureInstanceId", "email");

-- CreateIndex
CREATE INDEX "FeatureInvite_email_idx" ON "FeatureInvite"("email");

-- CreateIndex
CREATE INDEX "FeatureInvite_featureKey_idx" ON "FeatureInvite"("featureKey");

-- CreateIndex
CREATE UNIQUE INDEX "Watchlist_featureInstanceId_key" ON "Watchlist"("featureInstanceId");

-- CreateIndex
CREATE INDEX "WatchlistItem_watchlistId_position_idx" ON "WatchlistItem"("watchlistId", "position");

-- CreateIndex
CREATE INDEX "WatchlistItem_addedById_idx" ON "WatchlistItem"("addedById");

-- CreateIndex
CREATE UNIQUE INDEX "WatchlistItem_watchlistId_tmdbId_key" ON "WatchlistItem"("watchlistId", "tmdbId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFeature" ADD CONSTRAINT "UserFeature_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeatureInstance" ADD CONSTRAINT "FeatureInstance_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeatureMembership" ADD CONSTRAINT "FeatureMembership_featureInstanceId_fkey" FOREIGN KEY ("featureInstanceId") REFERENCES "FeatureInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeatureMembership" ADD CONSTRAINT "FeatureMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeatureInvite" ADD CONSTRAINT "FeatureInvite_featureInstanceId_fkey" FOREIGN KEY ("featureInstanceId") REFERENCES "FeatureInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeatureInvite" ADD CONSTRAINT "FeatureInvite_inviterId_fkey" FOREIGN KEY ("inviterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_featureInstanceId_fkey" FOREIGN KEY ("featureInstanceId") REFERENCES "FeatureInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistItem" ADD CONSTRAINT "WatchlistItem_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistItem" ADD CONSTRAINT "WatchlistItem_watchlistId_fkey" FOREIGN KEY ("watchlistId") REFERENCES "Watchlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

