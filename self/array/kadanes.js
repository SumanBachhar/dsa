// maximum subarray
const arr = [5, 4, -1, 7, 8];

const maximumSubArray = (arr) => {
  let maxi = -Infinity;
  let train = 0;
  let i = 0;

  while (i < arr.length) {
    let prev = train + arr[i];
    let neww = arr[i];

    train = Math.max(prev, neww);
    maxi = Math.max(maxi, train);
    i++;
  }
  return maxi;
};
console.log(maximumSubArray(arr));
