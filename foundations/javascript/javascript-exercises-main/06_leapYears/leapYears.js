const leapYears = function (year) {
  const is100 = year % 100 == 0 ? true : false;

  if (is100 && year % 400 == 0) {
    return true;
  }

  if (!is100 && year % 4 == 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
