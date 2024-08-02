let arr = [2, 0, 1, 2, 1, 0, 1, 0, 2];

const chocolateProblem = (arr) => {
  let l = 0;
  let m = 0;
  let h = arr.length - 1;
  while (m <= h) {
    if (arr[m] === 0) {
      [arr[l], arr[m]] = [arr[m], arr[l]];
      l++;
      m++;
    } else if (arr[m] === 1) {
      m++;
    } else {
      [arr[m], arr[h]] = [arr[h], arr[m]];
      h--;
    }
  }
  return arr;
};
console.log(chocolateProblem(arr));
