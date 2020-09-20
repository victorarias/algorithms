import { partition } from "./partition";

describe("partition", () => {
  it("partitions an array in place using the last element as pivot", () => {
    const arr = [10, 2, 3, 7, 5];

    partition(arr, 0, arr.length - 1);

    expect(arr).toEqual([3, 2, 5, 7, 10]);
  });

  it("returns the position of the partitioning item", () => {
    const arr = [9, 10, 20, 3, 5, 8];

    const actual = partition(arr, 0, arr.length - 1);

    expect(actual).toEqual(2);
    expect(arr).toEqual([5, 3, 8, 10, 9, 20]);
  });
});
