//IMPORT THE OTHER FILE
var Calculator = require('./calculator');

//CREATE A NEW CALCULATOR
var myCalculator = new Calculator();

//TEST THE SUM FUNCTION
console.log(myCalculator.sum(7,7));
console.log(myCalculator.subtract(10,5));
console.log(myCalculator.subtract(5,10));