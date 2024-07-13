const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = (nums) => {
  let maxi = -Infinity;
  let train = 0;
  let i = 0;

  while (i < nums.length) {
    let prev = train + nums[i];
    let neww = nums[i];

    train = Math.max(prev, neww);
    maxi = Math.max(maxi, train);
    i++;
  }
  return maxi;
};
console.log(maxSubArray(nums));
