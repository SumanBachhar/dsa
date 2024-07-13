const nums = [4, 1, 2, 1, 2];
const singleNumber = (nums) => {
  let uniq = 0;
  for (let i = 0; i < nums.length; i++) {
    uniq = uniq ^ nums[i];
  }
  return uniq;
};
console.log(singleNumber(nums));
