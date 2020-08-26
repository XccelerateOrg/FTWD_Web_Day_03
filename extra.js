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
    case "+":
      let addition = a + b;
      return Math.sign(addition) > 0 ? addition : "Negative!!"
    case "-":
      let subtraction = a - b;
      return Math.sign(subtraction) > 0 ? subtraction : "Negative!!"
    case "/":
      let division = a / b;
      return Math.sign(division) > 0 ? division : "Negative!!"
    case "*":
      let multiplication = a * b;
      return Math.sign(multiplication) > 0 ? multiplication : "Negative!!"
    default:
      return "Error"
  }
}

console.log(calculator("+", 2, 2)); // 4
console.log(calculator("-", 5, 2)); // 3
console.log(calculator("*", 2, 2)); // 4
console.log(calculator("/", 6, 3)); // 2

console.log(calculator("+", -2, 2)); // Negative
console.log(calculator("-", -5, 10)); // Negative
console.log(calculator("*", -2, 2)); // Negative
console.log(calculator("/", -6, 3)); // Negative

console.log(calculator("-", -5, -10)); // 5
