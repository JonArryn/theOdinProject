const sumAll = function (num1, num2) {
  let sum = 0;
  const argArray = [num1, num2];

  for (let i = 0; i < argArray.length; i++) {
    if (typeof argArray[i] != "number") {
      return "ERROR";
    }
    if (argArray[i] < 0) {
      return "ERROR";
    }
  }

  const sortedArray = argArray.sort((a, b) => {
    return a - b;
  });

  for (let i = sortedArray[0]; i <= sortedArray[1]; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
