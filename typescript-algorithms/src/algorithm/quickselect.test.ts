import { quickselect } from "./quickselect";
import { quicksort } from "./quicksort";
import { getRandomInt, getRandomIntegerArray } from "./random";

describe("quickselect", () => {
  it("returns the kth element of an unsorted array", () => {
    const arr = [10, 2, 3, 7, 5];

    const actual = quickselect(1, arr);

    expect(actual).toEqual(3);
  });

  it("works at scale", () => {
    for (let i = 0; i < 100; i++) {
      const arr1 = getRandomIntegerArray(1000, 10000),
        arr2 = [...arr1];
      const kth = getRandomInt(arr1.length);

      const actual = quickselect(kth, arr1);

      quicksort(arr2);
      const comparison = arr2[kth];

      expect(actual).toEqual(comparison);
    }
  });
});
