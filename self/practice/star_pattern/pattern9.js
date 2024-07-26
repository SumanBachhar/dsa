let n = 5;
const printPattern = (n) => {
  // 1st part
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = i; j < n; j++) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) {
      str += "* ";
    }
    console.log(str);
  }
  // 2nd part
  for (let i = n - 1; i >= 1; i--) {
    let str = "";

    for (let j = i; j < n; j++) {
      str += " ";
    }

    for (let k = 1; k <= i; k++) {
      str += "* ";
    }
    console.log(str);
  }
};
printPattern(n);
