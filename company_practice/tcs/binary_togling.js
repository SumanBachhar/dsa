let num = 10;
const toggleBits = (num) => {
  let binary = num.toString(2);
  console.log(binary);
  let toggleBinary = "";
  for (let i = 0; i < binary.length; i++) {
    toggleBinary += binary[i] === "0" ? "1" : "0";
    console.log(toggleBinary);
  }
  let toggleName = parseInt(toggleBinary, 2);
  return toggleName;
};
console.log(toggleBits(num));
