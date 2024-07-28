const array = [
  [1, 2, 3, 4],
  [5, 7, 6, 8],
  [9, 6, 4, 2],
];

for (let i = 0; i < array.length; i++) {
  for (let j = array[0].length - 1; j >= 0; j--) {
    console.log(array[i][j]);
  }
}
