let n = 5;
const printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      if (i == 1 || j == 1 || i == n || j == n || i == j || j == n - i + 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
};
printPattern(n);
