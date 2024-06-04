console.log("dsa");
const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let element = target - nums[i];
    if (map.has(element)) {
      console.log([i, map.get(element)]);
    }
    map.set(nums[i], i);
  }
};
twoSum(nums, target);
// output: 1,0
