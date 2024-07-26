let n = 5;
const printPattern = (n) => {
  for (let i = n; i >= 1; i--) {
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

  for (let i = 2; i <= n; i++) {
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
