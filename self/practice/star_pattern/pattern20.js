let n = 5;
const printPattern = (n) => {
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i - 1; j++) {
      str += " ";
    }
    for (let k = 1; k <= n; k++) {
      if (i == 1 || k == 1 || i == n || k == n) {
        str += "*";
      } else {
        str += " ";
      }
    }

    console.log(str);
  }
};
printPattern(n);
