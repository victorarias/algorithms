function swap<T>(arr: T[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition<T>(arr: T[], left: number, right: number): number {
  const pivotIndex = right,
    pivot = arr[pivotIndex];
  right--;

  while (true) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }

    if (left >= right) break;

    swap(arr, left, right);
    left++;
  }

  swap(arr, left, pivotIndex);

  return left;
}

export { partition };
