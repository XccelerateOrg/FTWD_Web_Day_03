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
  newString = string.toLowerCase()
  newTargetChar = targetChar.toLowerCase()
  let tempChar =  newString.split(newTargetChar)
  tempChar = tempChar.length-1
  return targetChar+" : "+tempChar+" times";
}

console.log(occurrence("baa", "a"));
