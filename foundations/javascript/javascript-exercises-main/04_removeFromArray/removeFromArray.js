const removeFromArray = function (array, ...args) {
  const argValues = args;
  let givenArray = array;

  for (let i = 0; i < argValues.length; i++) {
    givenArray = givenArray.filter((value) => value !== argValues[i]);
  }
  return givenArray;
};
// Do not edit below this line
module.exports = removeFromArray;
