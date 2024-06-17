let n = 5;

let stars = 1;
let spaces = Math.floor(n / 2);

for (let i = 1; i <= n; i++) {
  let s = "";

  // add spaces number of spaces
  for (let j = 1; j <= spaces; j++) {
    s += " ";
  }

  // add stars number of stars
  for (let j = 1; j <= stars; j++) {
    s += "*";
  }
  console.log(s);

  if (i <= n / 2) {
    spaces--;
    stars += 2;
  } else {
    spaces++;
    stars -= 2;
  }
}
