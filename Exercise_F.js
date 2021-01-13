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
   return string.toLowerCase().split(targetChar).length-1;
}

console.log(occurrence("baa", "a"));



// function occurrence(string, targetChar) {
//   // CODE HERE
//   for (i=0; i< string.split("").length; i++)
//   return string.split("").filter(targetChar=> string.split("")[i] === targetChar);
// }
