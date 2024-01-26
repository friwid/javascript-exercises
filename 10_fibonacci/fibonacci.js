const fibonacci = function(num) {
  let counter;
  let previousNum1 = 0;
  let previousNum2 = 1;
  if (typeof num !== "number") {
    counter = parseInt(num)
  } else {
    counter = num;
  }

  if (counter < 0) return "OOPS";
  if (counter == 0) return 0;

  for (let i = 2; i <= counter; i++) {
    let sum = previousNum2 + previousNum1;
    previousNum1 = previousNum2;
    previousNum2 = sum;
  }

  return previousNum2;

};

// Do not edit below this line
module.exports = fibonacci;
