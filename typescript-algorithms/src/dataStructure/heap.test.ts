import { getRandomIntegerArray } from "../algorithm/random";
import { create } from "./heap";

describe("heap", () => {
  it("keeps track of its size", () => {
    const heap = create((a: number, b) => a - b);

    heap.insert(1);
    heap.insert(2);
    heap.insert(3);
    heap.del();
    heap.insert(4);

    expect(heap.size()).toEqual(3);
  });

  it("inserts elements as a heap", () => {
    const heap = create((a: number, b) => a - b);

    expect(heap.getInnerArray()).toEqual([]);

    heap.insert(1);
    expect(heap.getInnerArray()).toEqual([1]);

    heap.insert(3);
    expect(heap.getInnerArray()).toEqual([3, 1]);

    heap.insert(10);
    expect(heap.getInnerArray()).toEqual([10, 1, 3]);

    heap.insert(2);
    expect(heap.getInnerArray()).toEqual([10, 2, 3, 1]);

    expect(heap.size()).toEqual(4);
  });

  it("dels elements as a heap", () => {
    const heap = create((a: number, b) => a - b);

    heap.insert(1);
    heap.insert(3);
    heap.insert(2);
    heap.insert(5);
    heap.insert(4);

    expect(heap.del()).toEqual(5);
    expect(heap.del()).toEqual(4);
    expect(heap.del()).toEqual(3);
    expect(heap.del()).toEqual(2);
    expect(heap.del()).toEqual(1);

    expect(heap.size()).toEqual(0);
  });

  it("is not buggy (regression)", () => {
    const heap = create((a: number, b) => a - b);
    heap.insert(2);
    heap.insert(1);
    heap.insert(4);
    heap.insert(0);

    expect(heap.getInnerArray()).toEqual([4, 1, 2, 0]);
    expect(heap.del()).toEqual(4);
    expect(heap.getInnerArray()).toEqual([2, 1, 0]);
    expect(heap.del()).toEqual(2);
    expect(heap.del()).toEqual(1);
    expect(heap.del()).toEqual(0);
  });

  it("works as a max heap at scale", () => {
    for (let i = 0; i < 100; i++) {
      const max = 1000;
      const arr = getRandomIntegerArray(max, max);

      const heap = create((a: number, b) => a - b);

      for (const n of arr) {
        heap.insert(n);
      }

      const actual = [];
      while (heap.size() > 0) {
        actual.push(heap.del());
      }

      expect(actual).toEqual(arr.sort((a, b) => b - a));
    }
  });

  it("throws when attempting to del on an empty heap", () => {
    const heap = create((a: number, b) => a - b);

    expect(() => {
      heap.del();
    }).toThrow(/cannot del from an empty heap/);
  });
});
