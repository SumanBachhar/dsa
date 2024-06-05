const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

const mergedTwoSortedList = (list1, list2) => {
  const list = list1.concat(list2);
  const sorted = list.sort((a, b) => a - b);
  console.log(sorted);
};
mergedTwoSortedList(list1, list2);
