const digits = [1, 2, 3];
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  return [1, ...digits];
};
console.log(plusOne(digits));
