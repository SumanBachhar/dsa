// const nums = [4, 1, 2, 1, 2];
const nums = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8];
const singleNumber = (nums) => {
  let uniq = 0;
  for (let i = 0; i < nums.length; i++) {
    uniq = uniq ^ nums[i];
  }
  return uniq;
};
console.log(singleNumber(nums));
