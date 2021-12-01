const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce((reducer, currentValue) => {
    return reducer + currentValue;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((reducer, currentValue) => {
    return reducer * currentValue;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
