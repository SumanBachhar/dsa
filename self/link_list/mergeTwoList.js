const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
console.log(mergeTwoLists(list1, list2));
