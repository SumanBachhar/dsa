let n = 5;
const printPattern = (n) => {
  // 1st pattern
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
  // 2nd pattern
  for (let i = n - 1; i >= 0; i--) {
    let str = "";
    for (let j = 0; j <= i - 1; j++) {
      str += "*";
    }
    console.log(str);
  }
};
printPattern(n);
