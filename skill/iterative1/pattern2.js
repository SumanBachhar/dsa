let n = 5;

for (let line = n; line >= 1; line--) {
  let s = "";
  for (let j = 1; j <= line; j++) {
    s += "*";
  }
  console.log(s);
}
