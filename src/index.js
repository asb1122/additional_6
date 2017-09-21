const bigInt = require('./bigInt.js');

module.exports = function zeros(expression) {
  var factorials = expression.split("*");
  var result = bigInt(1);
  for (i = 0; i < factorials.length; i++){
    var singleFactorial;
    var substr = factorials[i];
    if (substr.includes("!!")){
      var number = bigInt(substr.replace("!!", ""));
      if (isEven(number)){
        singleFactorial = factorialEven(number);
      } else {
        singleFactorial = factorialOdd(number);
      }
    } else if (substr.includes("!")){
      number = parseInt(substr.replace("!", ""));
      singleFactorial = factorial(number);
    }
    result = result.multiply(singleFactorial);
  }
  return countZerosAtTheEnd(result.toString());
}

function factorial(n) {
  return (n != 1) ? bigInt(n).multiply(factorial(n - 1)) : 1;
}

function factorialEven(n) {
  return (n != 2) ? bigInt(n).multiply(factorialEven(n - 2)) : 1;
}

function factorialOdd(n) {
  return (n != 1) ? bigInt(n).multiply(factorialOdd(n - 2)) : 1;
}

function isEven(n) {
   return n % 2 == 0;
}

function countZerosAtTheEnd(str){
  var reversedStr = str.split("").reverse();
  var countZeros = 0;
  for (i = 0; i < reversedStr.length; i++){
    if (reversedStr[i] == '0'){
      countZeros++;
    } else {
      break;
    }
  }
  return countZeros;
}
