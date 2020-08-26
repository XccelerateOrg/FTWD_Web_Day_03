/**********************************************
 * Exercise F
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that takes two inputs: a string and a character.
 * The function will count the number of times that character appears in the string.
 * The count is case insensitive. */

function occurrence(string, targetChar) {
  // CODE HERE
  // 1) Split each character, express them in terms of array.
  let stringArray = string.split("");
  // 2) Push the target character into the new array for counting. 
  let frequency = [];
  for (let element of stringArray) {
    if (element === targetChar) {
      frequency.push(element);
    }
  }
  // 3) Use "array.length" method.
  return frequency.length;    
}

console.log(occurrence("balloon", "z"));
