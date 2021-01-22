/**********************************************
 * Exercise D
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that expects a number as a parameter. 
 * If the number that is entered is less than 0, equal to 0, or not a number, 
 * the function should return the string ‘ERROR’. If the number that is entered 
 * is greater than or equal to 1000000 it should simply return the number. 
 * Otherwise it should multiply the number by 10 however many times it takes 
 * to get a number that is greater than or equal to 1000000 and return that number. 
 * Consider which loop you will need to use to do this.
 Use a combination of conditionals and loops to create your answer for this question. */
 // CODE HERE
 
 
 const multiplyNumber(number) => {
   if (number < 0 || number == 0 || isNaN(NaN)) {
     console.log("ERROR");
   } else if (number >= 1_000_000) {
     console.log(number);
   } else {
     return tenNumber;
 }
 };
 
const tenNumber = (number) => {
  if(number * 10 >= 1_000_000) {
    console.log(number) 
    return number
  } else {
    return number * 10
  }
  };
  

console.log(multiplyNumber(10));

