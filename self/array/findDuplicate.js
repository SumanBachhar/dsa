const nums = [3, 3, 3, 3, 3];

const findDuplicate = (nums) => {
  const sortedArray = nums.sort();
  const results = [];

  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i + 1] === sortedArray[i]) {
      results.push(sortedArray[i]);
    }
  }
  console.log(results);
};
findDuplicate(nums);

const findDup = (nums) => {
  let obj = {};

  for (let i of nums) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      return i;
    }
  }
};
console.log(findDup(nums));
