const palindromes = function (string) {
  lowerString = string.toLowerCase();
  array = lowerString.split("");
  cleanArray = array.filter((letter) => {
    if (letter !== " " && letter !== "." && letter !== "!" && letter !== ",") {
      return true;
    }
  });
  cleanString = cleanArray.join("");
  reverseArray = cleanArray.reverse();
  reverseString = reverseArray.join("");
  if (cleanString == reverseString) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
