const removeFromArray = function(array = [], ...values) {
  let newArray = [];
  let uniqueValue; 

  for (let arr of array) {
    uniqueValue = true;
    for (let val of values) {
      if (arr === val) {
        uniqueValue = false
        break;
      };

    }
    if (uniqueValue) {
      newArray.push(arr);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
