const nums = [1, 4, 5, "banana", 6, 1, 4, 4, 9, 3, "banana"];

const findDuplicate = (nums) => {
  let sortedArray = nums.sort();
  let results = [];

  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i + 1] === sortedArray[i]) {
      results.push(sortedArray[i]);
    }
  }
  console.log(results);
};
findDuplicate(nums);
