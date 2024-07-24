let n = 4;
let str = "";
let count = 1;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    str += count;
    count++;
  }
  // str += " ";
  console.log(str);
}
