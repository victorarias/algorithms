import { partition } from "./partition";

function quicksort<T>(arr: T[], left = 0, right = arr.length - 1): void {
  if (right - left <= 0) return;

  const partitionIndex = partition(arr, left, right);

  quicksort(arr, left, partitionIndex - 1);
  quicksort(arr, partitionIndex + 1, right);
}

export { quicksort };
