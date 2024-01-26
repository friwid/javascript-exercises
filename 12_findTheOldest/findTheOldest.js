const findTheOldest = function (array) {
  return array.reduce(function(oldest, currentPerson) {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    if (oldestAge < currentAge) {
      return currentPerson;
    } else {
      return oldest;
    }
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
