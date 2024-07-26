const arr = [1, 2, 3, 4, 5, 6, 7, 8, 87, 6, 565, 9];
const getMax = (arr) => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(getMax(arr));

const getMin = (arr) => {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
};
console.log(getMin(arr));
