import { redirect } from "next/navigation";

type WatchlistPageProps = {
  params: Promise<{
    listId: string;
  }>;
};

export default async function WatchlistPage({ params }: WatchlistPageProps) {
  const { listId } = await params;
  redirect(`/app/watchlists/${listId}`);
}
