const arr = [1, 2, 3, 2, 5, 1, 7, 3];
const countElementsGreaterThanPrior = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let count = 1;
  let maxSoFar = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxSoFar) {
      count++;
      maxSoFar = arr[i];
    }
  }
  return count;
};
console.log(countElementsGreaterThanPrior(arr));
