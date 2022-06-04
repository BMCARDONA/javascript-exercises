

const sumAll = function(firstNumber, secondNumber) {
    // If an operand is not a number, return "ERROR"
    if (typeof(firstNumber) != "number" || typeof(secondNumber) != "number") {
      return("ERROR");
    }
    // if an operand holds a negative value, return "ERROR"
    else if (firstNumber < 0 || secondNumber < 0) {
      return("ERROR");
    }
    else {
      let sum = 0;
      if (firstNumber < secondNumber) {
        for (let i = firstNumber; i <= secondNumber; ++i) {
          sum += i;
        }
        return sum;
      } else if (firstNumber > secondNumber) {
        for (let i = firstNumber; i >= secondNumber; --i) {
          sum += i;
        }
        return sum;
      }
    }
};

// Do not edit below this line
module.exports = sumAll;
