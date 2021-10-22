/**********************************************
 * Exercise Extra Functional
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that takes three inputs: a string (the operator used), and two numbers.
 * The function uses a switch case (dependant on the operator) to decide what block of code to run.
 * The calculator function should handle these operators: +, -, /, * (Addition, Subtraction, Division and Multiplication)
 * The numbers should always be positive */

function calculator(operator, a, b) {
  if ( a > 0 && b > 0){
    switch (operator) {
      case "+": //Addition
        return a + b;
        break;

      case "-": //Subtraction
        return a - b;
        break;

      case "/": //Division
        return a / b;
        break;

      case "*": //Multiplication
        return a * b;
        break;  

      default:
        return "Please enter a correct operators";
    }
  } else return "Please enter a positive integer";
} 

console.log(calculator("*", 1, 2));
console.log(calculator("+", 1, -2));
console.log(calculator("m", 1, 2));

