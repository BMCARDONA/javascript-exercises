
/*
======= Wrong Answer =======
const reverseString = function(string) {
    let originalString = string;
    let newString = "";
    for (let i = 0; i < originalString.length; ++i) {
      newString = originalString.unshift(originalString[i]);
    }
    return newString;
};
*/

const reverseString = function(string) {
  let originalString = string;
  let newString = "";
  for (let i = originalString.length - 1; i >= 0; --i) {
    newString += originalString[i];
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
