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
  let x = string.indexOf(targetChar);
  let a = 0
  while (x > -1){
    string = string.replace(targetChar, "");
    x = string.indexOf(targetChar);
    a++
  }
  return a;
}
