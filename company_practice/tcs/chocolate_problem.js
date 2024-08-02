const arr = [4, 5, 0, 1, 9, 0, 5, 0];
let n = 8;
const chocolateProblem = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[j] = arr[i];
      console.log(arr[i]);
      console.log(arr[j]);
      j++;
      console.log(j);
    }
  }

  while (j < n) {
    arr[j] = 0;
    console.log(arr[j]);
    j++;
    console.log(j);
  }

  return arr;
};
console.log(chocolateProblem(arr));
