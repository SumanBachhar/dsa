const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

const binarySearch = (nums, target) => {
  let lo = 0,
    hi = nums.length - 1;
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo + 1) / 2);
    if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      lo = mid;
    }
  }
  console.log(nums[lo] == target ? lo : -1);
};
binarySearch(nums, target);
