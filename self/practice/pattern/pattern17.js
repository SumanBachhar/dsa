let n = 5;
let m = 5;
const printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= m; j++) {
      if (i == 1 || j == 1 || i == n || j == m) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
};
printPattern(n);
