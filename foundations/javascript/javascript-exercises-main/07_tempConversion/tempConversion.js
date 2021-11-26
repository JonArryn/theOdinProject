const ftoc = function (farenheit) {
  const temp = (farenheit - 32) * 0.55555555555556;

  function round(value, precision) {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
  return round(temp, 1);
};

const ctof = function (celsius) {
  const temp = celsius * 1.8 + 32;

  function round(value, precision) {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
  return round(temp, 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
