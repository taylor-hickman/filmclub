import { WatchlistItemStatus } from "../../../../generated/prisma";

type ItemWeightRecord = {
  userId: string;
  weight: number;
};

type PrioritizableWatchlistItem = {
  position: number;
  status: WatchlistItemStatus;
  weights: ItemWeightRecord[];
};

type PrioritizedWatchlistItem<T extends PrioritizableWatchlistItem> = Omit<
  T,
  "weights"
> & {
  totalWeight: number;
  weightCount: number;
  viewerWeight: number | null;
};

function getWeightSummary(weights: ItemWeightRecord[], viewerUserId: string) {
  let totalWeight = 0;
  let viewerWeight: number | null = null;

  for (const weight of weights) {
    totalWeight += weight.weight;

    if (weight.userId === viewerUserId) {
      viewerWeight = weight.weight;
    }
  }

  return {
    totalWeight,
    weightCount: weights.length,
    viewerWeight,
  };
}

export function prioritizeWatchlistItems<T extends PrioritizableWatchlistItem>(
  items: T[],
  viewerUserId: string,
): PrioritizedWatchlistItem<T>[] {
  return items
    .map(({ weights, ...item }) => ({
      ...item,
      ...getWeightSummary(weights, viewerUserId),
    }))
    .sort((left, right) => {
      const leftQueued = left.status === WatchlistItemStatus.QUEUED;
      const rightQueued = right.status === WatchlistItemStatus.QUEUED;

      if (leftQueued !== rightQueued) {
        return leftQueued ? -1 : 1;
      }

      if (leftQueued && left.totalWeight !== right.totalWeight) {
        return right.totalWeight - left.totalWeight;
      }

      return left.position - right.position;
    });
}
