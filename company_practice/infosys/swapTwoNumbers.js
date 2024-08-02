let a = 2;
let b = 3;
const swapNumbers = (a, b) => {
  // using third variable
  // let temp = a;
  // a = b;
  // b = temp;

  // without using third variable
  return ([a, b] = [b, a]);
};
console.log(swapNumbers(a, b));
