let n = 5;
const printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = i; j < n; j++) {
      str += " ";
    }

    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
};
printPattern(n);
