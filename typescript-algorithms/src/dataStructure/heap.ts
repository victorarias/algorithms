type Heap<T> = {
  insert: (elem: T) => void;
  del: () => T;
  size: () => number;
  getInnerArray: () => T[];
};

type Comparator<T> = (a: T, b: T) => number;

function create<T>(comparator: Comparator<T>): Heap<T> {
  const arr: T[] = [];

  const leftChildIndex = (index: number): number => {
    return index * 2 + 1;
  };
  const leftChild = (index: number): T => {
    return arr[leftChildIndex(index)];
  };
  const rightChildIndex = (index: number): number => {
    return index * 2 + 2;
  };
  const rightChild = (index: number): T => {
    return arr[rightChildIndex(index)];
  };
  const getParentIndex = (index: number) => {
    return Math.trunc((index - 1) / 2);
  };
  const getParent = (index: number): T => {
    return arr[Math.trunc((index - 1) / 2)];
  };

  const del = () => {
    if (arr.length === 0) {
      throw new Error("cannot del from an empty heap");
    }

    swap(0, arr.length - 1);
    const elem = arr.pop();

    if (typeof elem === "undefined") {
      throw new Error("error trying to pop arr that should not be empty");
    }

    let currentIndex = 0;

    const hasGreaterChild = (index: number) => {
      const currentValue = arr[index],
        left = leftChild(index),
        right = rightChild(index);

      return (
        (left && comparator(leftChild(index), currentValue) > 0) ||
        (right && comparator(rightChild(index), currentValue) > 0)
      );
    };

    while (hasGreaterChild(currentIndex)) {
      if (
        leftChild(currentIndex) > rightChild(currentIndex) ||
        !rightChild(currentIndex)
      ) {
        const newIndex = leftChildIndex(currentIndex);
        swap(newIndex, currentIndex);
        currentIndex = newIndex;
      } else {
        const newIndex = rightChildIndex(currentIndex);
        swap(newIndex, currentIndex);
        currentIndex = newIndex;
      }
    }

    return elem;
  };

  const swap = (i: number, j: number) => {
    const a = arr[j];
    arr[j] = arr[i];
    arr[i] = a;
  };

  const insert = (elem: T): void => {
    arr.push(elem);
    let currentIndex = arr.length - 1;

    while (
      currentIndex > 0 &&
      comparator(arr[currentIndex], getParent(currentIndex)) > 0
    ) {
      const parentIndex = getParentIndex(currentIndex);
      swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  };

  const size = () => arr.length;
  const getInnerArray = () => arr;

  return {
    insert,
    del,
    size,
    getInnerArray,
  };
}

export { create };
