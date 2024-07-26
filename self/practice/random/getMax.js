const arr = [1, 2, 3, 4, 5, 6, 7, 8, 87, 6, 565, 9];

const getMax = (arr) => {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};
console.log(getMax(arr));
