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
  switch (operator) {
    case "+": a + b
      console.log("The addition is equal to " + (a + b))
      break;
    case "-": a - b
      console.log("The substraction is equal to " + (a - b))
      break;
    case "/": a / b
      console.log("The division is equal to " + (a / b))
      break;
    case "*": a * b
      console.log("The multiplication is equal to " + (a * b))
      break;
    default:
      console.log("Invalid Operator!")
      break;
  }
}

console.log(calculator("+", 1, 2));
