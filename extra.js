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
  if (a > 0 && b > 0){
  switch (operator) {
    case '+':
      console.log(a+b);
      break;
    case '-':
      console.log(a-b);
      break;
    case '/':
      console.log(a/b);
      break;
    case '*':
      console.log(a*b);
      break;
    default:
      console.log('Error');
  }
  }
}

console.log(calculator("/", 2, 102));
