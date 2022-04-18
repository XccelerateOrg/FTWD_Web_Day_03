/**********************************************
 * Exercise D
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that expects a number as a parameter. 
 * If the number that is entered is less than 0, equal to 0, or not a number,  // 1st If
 * the function should return the string ‘ERROR’. 
 * 
 * If the number that is entered is greater than or equal to 1000000 it should simply return the number.  // 2nd if
 * 
 * Otherwise it should multiply the number by 10 however many times it takes  // 3rd if-> else 
 * to get a number that is greater than or equal to 1000000 and return that number. 
 * Consider which loop you will need to use to do this.
Use a combination of conditionals and loops to create your answer for this question. */

function multiplyNumber(number) {
  // CODE HERE
  if (number <= 0 || number === 0 || isNaN(number) == true ){
    return "ERROR";
  } 
  else if ( number >= 1000000 ){
    return number ;
  }
  else {     
    let i = 0
    while (number <=1000000){
    number = (number*10);
    i++}
    return i;
    }
}

console.log (multiplyNumber(0));
console.log (multiplyNumber(-100));
console.log (multiplyNumber("Ilovecoding"));
console.log (multiplyNumber(1000));
console.log (multiplyNumber(9876543221));

