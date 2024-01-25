const sumAll = function(firstNum, secondNum) {
  let sum = 0;
  let lowerNum;
  let higherNum;
  if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return "ERROR";
  if (!(firstNum >= 0) ||  !(secondNum >= 0)) return "ERROR";
  (firstNum <= secondNum ? 
    (() => {lowerNum = firstNum; higherNum = secondNum;})() : 
    (() => {lowerNum = secondNum; higherNum = firstNum;})()
  );

  for (;lowerNum <= higherNum;lowerNum++ ) {
    sum += lowerNum;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
