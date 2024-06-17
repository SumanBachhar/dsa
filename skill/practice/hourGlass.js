const n = 5;
let stars = n;
let spaces = Math.floor(n - stars);
console.log(spaces);

for (let i = 1; i <= n; i++) {
  let s = "";

  for (let j = 1; j <= spaces; j++) {
    s += " ";
  }

  for (let j = 1; j <= stars; j++) {
    s += "*";
  }
  console.log(s);

  if (i <= n / 2) {
    spaces++;
    stars -= 2;
  } else {
    spaces--;
    stars += 2;
  }
}
