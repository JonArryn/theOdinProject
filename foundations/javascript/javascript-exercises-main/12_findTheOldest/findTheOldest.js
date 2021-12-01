// What do I need to do?

// loop over each person in the array
// check to see if there is both a yearOfBirth and yearOfDeath property
// if !yearOfDeath then use today's year to calculate their age
// if yearOfDeath, then calculate the number of years they were alive by subtracting yearOfBirth from yearOfDeath
// determine of all 'years alive' which value is the highest
// return the person object that had the highest age

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};
// Do not edit below this line
module.exports = findTheOldest;
