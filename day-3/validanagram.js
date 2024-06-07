const s = "rat";
const t = "car";
const isAnagram = (s, t) => {
  str = s.split("").sort();
  tst = t.split("").sort();

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== tst[i]) {
      console.log(false);
    } else if (str.length !== tst.length) {
      console.log(false);
    }
  }
  console.log(true);
};
isAnagram(s, t);
