
const repeatString = function(string, num) {
    if (num < 0) {
        return("ERROR");
    } else {
          // Cannot simply write <let originalString>, since it'll have an undefined value
        let originalString = "";
        for (let i = 0; i < num; ++i) {
            originalString += string;
        }
        return(originalString);
    }
};

repeatString("hey", 3);


// Do not edit below this line
module.exports = repeatString;
