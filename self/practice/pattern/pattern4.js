const n = 5;
const printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = i; j < n; j++) {
      str += " ";
    }

    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
};
printPattern(n);

// function printPattern(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";

//     for (let j = 2 * (n - i); j >= 0; j--) {

//       str += " ";
//     }

//     for (let j = 0; j <= i; j++) {
//       // Loop for stars
//       str += "* ";
//     }

//     console.log(str);
//   }
// }

// const n = 5;
// printPattern(n);
