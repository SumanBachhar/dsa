const arr = [
  [1, 2, 3, 4],
  [5, 7, 6, 8],
  [9, 6, 4, 2],
];
let m = arr.length;
let n = arr[0].length;

for (let i = 0; i < m; i++) {
  s = "";
  for (let j = 0; j < n; j++) {
    s += arr[i][j] + " ";
  }
  console.log(s);
}
