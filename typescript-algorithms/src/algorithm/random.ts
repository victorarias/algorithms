function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function getRandomIntegerArray(
  maxNumberOfItems: number,
  maxValueWithinArray: number
): number[] {
  const arr = [];

  let count = getRandomInt(maxNumberOfItems);
  while (count-- > 0) {
    arr.push(getRandomInt(maxValueWithinArray));
  }

  return arr;
}

export { getRandomInt, getRandomIntegerArray };
