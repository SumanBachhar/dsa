const arr = [1, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let target = 110;

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum(arr, target));
