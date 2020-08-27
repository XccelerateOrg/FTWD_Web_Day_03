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
    let result = '';
    switch (
        operator
    ) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;;
            break;
        case "/":
            result = a / b;;
            break;
        case "*":
            result = a * b;;
            break;

    }
    return result;
}

console.log(calculator("+", 1, 2));
console.log(calculator("-", 1, 2));
console.log(calculator("*", 1, 2));
console.log(calculator("/", 1, 2));