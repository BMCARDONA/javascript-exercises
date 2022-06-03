
// arguments object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
   
// The arguments object is not an Array. It is similar, but lacks all Array properties except LENGTH. //

// helpful link: https://stackoverflow.com/questions/9882284/looping-through-array-and-removing-items-without-breaking-for-loop


const removeFromArray = function(myArray, ...valuesToCheck) {
  for (let i = myArray.length - 1; i >= 0; --i) {
    for (let value of valuesToCheck) {
      if (myArray[i] === value) {
        // splice(index, # of items)
        myArray.splice(i, 1);
      }
    }
  }
  return myArray;
};


// Do not edit below this line
module.exports = removeFromArray;


