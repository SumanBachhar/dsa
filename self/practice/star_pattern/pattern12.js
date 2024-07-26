let n = 5;
const printPattern = (n) => {
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = i; j < n; j++) {
      str += " ";
    }

    for (let k = 0; k < n; k++) {
      str += "*";
    }

    console.log(str);
  }
};
printPattern(n);
