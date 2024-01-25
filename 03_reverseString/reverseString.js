const reverseString = function(string) {
let stringArray = string;

stringArray = stringArray.split("").reverse().join("");

return stringArray;
};

// Do not edit below this line
module.exports = reverseString;
