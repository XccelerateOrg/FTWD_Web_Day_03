/* Exercise Extra Functional*/
/** Write a function that takes three inputs: a string (the operator used), and two numbers.
 * The function uses a switch case (dependant on the operator) to decide what block of code to run.
 * The calculator function should handle these operators: +, -, /, * (Addition, Subtraction, Division and Multiplication)
 * The numbers should always be positive */

function calculator(operator, a, b) {
  if (a>0&&b>0){  // 可以用if+switch
  switch (operator) {
    case '+':
      return a+b        //MUST NOT MISSED RETURN!!!!!!!!!!!!!!!!!!!!
      break;
    case '-':
      return a-b
      break;
    case '*':
      return a*b
      break;
    case '/':
     return a/b
    break;
    // default:
    //   console.log('a must be bigger than b and ');
  } } else {return "error"}  //OR throw error
}

//https://stackoverflow.com/questions/52738822/javascript-calculator-js-switch-case
/*function Calculatrice(a, b, op) {

  switch (op) {
    case '+':
      return a + b
      break;
    case '-':
      return a - b
      break;
    case '*':
      return a * b
      break;
    case '/':
      return a / b
      break;
  
  }
}
console.log(Calculatrice(5, 5, '+')); 
*/
console.log(calculator("+", 1, 2));
console.log(calculator("*", 3, 2));
console.log(calculator("/", 10, 2));