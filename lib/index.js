"use strict";

var multiply = function multiply(a, b) {
  return a * b;
};

var firstNum = 2;
var secondNum = 3;
var thirdNum = 4;
var product = multiply(firstNum, secondNum, thirdNum);
console.log("The product of ".concat(firstNum, " and ").concat(secondNum, " and ").concat(thirdNum, " is ").concat(product));