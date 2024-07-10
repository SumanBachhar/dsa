const s = "anagram";
const t = "naamgra";

const validAnagram = (s, t) => {
  str = s.split("").sort();
  tst = t.split("").sort();

  for (let i = 0; i < str.length; i++) {
    if (str[i] != tst[i]) {
      return false;
    } else if (str.length != tst.length) {
      return false;
    }
  }
  return true;
};
console.log(validAnagram(s, t));
