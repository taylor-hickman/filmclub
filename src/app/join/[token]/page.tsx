import { WatchlistInviteAcceptanceClient } from "~/features/watchlists/components/watchlist-invite-acceptance-client";
import { auth } from "~/server/auth";

type JoinPageProps = {
  params: Promise<{
    token: string;
  }>;
};

export default async function JoinPage({ params }: JoinPageProps) {
  const session = await auth();
  const { token } = await params;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <WatchlistInviteAcceptanceClient
        token={token}
        viewerEmail={session?.user?.email}
      />
    </div>
  );
}
