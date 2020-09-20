function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function generateRandomIntegerArray(maxCount: number, max: number): number[] {
  const arr = [];

  let count = getRandomInt(maxCount);
  while (count-- > 0) {
    arr.push(getRandomInt(max));
  }

  return arr;
}

export { getRandomInt, generateRandomIntegerArray };
