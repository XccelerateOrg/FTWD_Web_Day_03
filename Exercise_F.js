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
  Arr = string.split("")
  return Arr.filter((elm) => elm == targetChar).length;
}

console.log(occurrence("baa", "b"));
