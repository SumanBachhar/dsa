const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

const mergedTwoSortedList = (list1, list2) => {
  let list = list1.concat(list2);
  let sorted = list.sort((a, b) => a - b);
  return sorted;
};
console.log(mergedTwoSortedList(list1, list2));
