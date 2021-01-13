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
  // CODE HERE
  let o = 0;
  switch (operator) {
    case "+":
      o = a + b;
      break;
    case "-":
      o = a - b;
      break;
    case "*":
      o = a * b;
      break;
    case "/":
      o = a / b;
      break;
  }
  return o;
}
console.log(calculator("-", 20, 5));
