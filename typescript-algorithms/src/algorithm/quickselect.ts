import { partition } from "./partition";

function quickselect<T>(
  kth: number,
  arr: T[],
  left = 0,
  right = arr.length - 1
): T {
  if (right - left <= 0) return arr[left];

  const mid = partition(arr, left, right);

  if (mid === kth) {
    return arr[mid];
  } else if (mid < kth) {
    return quickselect(kth, arr, mid + 1, right);
  } else {
    return quickselect(kth, arr, left, mid - 1);
  }
}

export { quickselect };
