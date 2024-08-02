let n = 5244;
const computeProductOfDigits = (n) => {
  let string = n.toString();
  console.log(string);
  let product = 1;

  for (let i = 0; i < string.length; i++) {
    product *= parseInt(string[i], 10);
    console.log(product);
  }
  return product;
};
console.log(computeProductOfDigits(n));
