/**********************************************
 * Exercise D
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that expects a number as a parameter. 
 * 
 * If the number that is entered is less than 0, equal to 0, or not a number, 
 * the function should return the string ‘ERROR’. 
 * 
 * If the number that is entered 
 * is greater than or equal to 1000000 it should simply return the number. 
 * 
 * Otherwise it should multiply the number by 10 however many times it takes 
 * to get a number that is greater than or equal to 1000000 and return that number. 
 * 
 * Consider which loop you will need to use to do this.
Use a combination of conditionals and loops to create your answer for this question. */

function multiplyNumber(x) {
  // CODE HERE
  if (x <= 0 || isNaN(x)){
    return "ERROR";
  }
  else if (x >= 1000000){
    return x;
  }
  else {
    do {
      x *= 10;
    } while (x < 1000000);
  }
  return x;
}

console.log(multiplyNumber(30));
