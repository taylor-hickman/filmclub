import { WatchlistDetailClient } from "~/features/watchlists/components/watchlist-detail-client";

type WatchlistPageProps = {
  params: Promise<{
    watchlistId: string;
  }>;
};

export default async function WatchlistPage({ params }: WatchlistPageProps) {
  const { watchlistId } = await params;

  return <WatchlistDetailClient watchlistId={watchlistId} />;
}
