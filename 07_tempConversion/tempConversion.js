const ftoc = function(fNumber) {
    let celsius = (fNumber - 32) * (5/9);
    let roundedCelsius = Math.round(celsius * 10) / 10;
    return(roundedCelsius);
};

const ctof = function(cNumber) {
    let fahrenheit = cNumber * (9/5) + 32;
    let roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
    return (roundedFahrenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
