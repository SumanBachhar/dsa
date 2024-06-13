const ransomNote = "aa";
const magazine = "aab";

const canConstruct = (ransomNote, magazine) => {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }
  if (!ransomNote) {
    console.log(true);
  } else {
    console.log(false);
  }
};

canConstruct(ransomNote, magazine);
