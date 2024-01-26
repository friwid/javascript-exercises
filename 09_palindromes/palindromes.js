const palindromes = function (string) {
  const array = Array.from(string.toLowerCase().replace(/[^a-zA-Z1-9]/g, ""));
  let palindrome = true;
  for (let i = 0; i < ((array.length)/2); i++) {
    if (array[i] !== array[array.length-1-i]) { 
      palindrome = false;
      break;
    }
  }
  return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
