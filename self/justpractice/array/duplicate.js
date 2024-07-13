const nums = [1, 3, 4, 2, 2];

const duplicate = (nums) => {
  let obj = {};

  for (let i of nums) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      return i;
    }
  }
};
console.log(duplicate(nums));
