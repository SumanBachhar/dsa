let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "";
  console.log(i);
  for (let j = 1; j <= n - i + 1; j++) {
    str += n - j + 1;
  }
  console.log(str);
}
