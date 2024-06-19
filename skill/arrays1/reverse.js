const array = [10, 20, 30, 40, 50, 60];

const reverseArray = (array) => {
  let reversed = "";
  for (let i = array.length - 1; i >= 0; i--) {
    reversed += array[i] + ",";
  }
  return reversed;
};
console.log(reverseArray(array));
