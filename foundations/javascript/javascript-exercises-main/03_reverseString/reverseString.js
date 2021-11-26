const reverseString = function (str) {
  const splitString = str.split("");
  let revString = "";

  for (let i = splitString.length - 1; i >= 0; i--) {
    console.log(i);
    revString += splitString[i];
  }
  return revString;
};

// Do not edit below this line
module.exports = reverseString;
