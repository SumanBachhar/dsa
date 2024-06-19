const n = 4;
let count = 1;

for (let i = 1; i <= n; i++) {
  let s = "";
  for (let j = 1; j <= i; j++) {
    s += count;
    count++;
  }
  console.log(s);
}
