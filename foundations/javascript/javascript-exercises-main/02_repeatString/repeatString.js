const repeatString = function (string, numRepeat) {
  let returnString = "";
  if (numRepeat < 0) {
    return "ERROR";
  } else
    for (let i = 1; i <= numRepeat; ++i) {
      returnString += string;
    }
  return returnString;
};

// Do not edit below this line
module.exports = repeatString;
