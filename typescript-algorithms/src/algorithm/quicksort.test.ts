import { quicksort } from "./quicksort";
import { generateRandomIntegerArray } from "./random";

describe("quicksort", () => {
  it("sorts the given array in place", () => {
    const arr = [10, 2, 3, 7, 5];

    quicksort(arr);

    expect(arr).toEqual([2, 3, 5, 7, 10]);
  });

  it("sorts an empty array", () => {
    const arr: number[] = [];
    quicksort(arr);
    expect(arr).toEqual([]);
  });

  it("sorts correctly", () => {
    for (let i = 0; i < 100; i++) {
      const arr1 = generateRandomIntegerArray(1000, 10000),
        arr2 = [...arr1];

      quicksort(arr1);
      arr2.sort((a, b) => a - b);

      expect(arr1).toEqual(arr2);
    }
  });
});
