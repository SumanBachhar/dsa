const array = [
  [1, 2, 3, 4],
  [5, 7, 6, 8],
  [9, 6, 4, 2],
];

for (let j = array[0].length - 1; j >= 0; j--) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i][j]);
  }
}
