let n = 5;
const printPattern = (n) => {
  let x = n;
  let y = n;
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n * 2; j++) {
      if (j == x || j == y) {
        str += "*";
      } else {
        str += " ";
      }
    }

    x--;
    y++;
    console.log(str);
  }
};
printPattern(n);
