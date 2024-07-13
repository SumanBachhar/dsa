const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const missingNumber = (nums) => {
  let ans = 0;
  for (let i = 1; i <= nums.length; i++) {
    ans ^= i;
  }
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans;
};
console.log(missingNumber(nums));

const missingNum = (nums) => {
  let miss = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    console.log(nums[i]);
    miss += i + 1 - nums[i];
  }
  return miss;
};
console.log(missingNum(nums));
