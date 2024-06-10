// Remove duplicate element form an array
// OR
// Find the uniq element
const array = [1, 4, 5, "banana", 6, 1, 4, 4, 9, 3, "banana"];

const uniqElement = array.filter((element, index) => {
  return array.indexOf(element) === index;
});
console.log(uniqElement);
