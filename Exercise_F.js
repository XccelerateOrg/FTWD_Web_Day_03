/**********************************************
 * Exercise F
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that takes two inputs: a string and a character.
 * The function will count the number of times that character appears in the string.
 * The count is case insensitive. */


// Can't say I really came up with this myself, But i understand how it works. I tried using .indexOf to start with.
// would be interested to know if it can be implemented with indexOf.
function occurrence(string, targetChar) {
  return string.split(targetChar).length-1
}

console.log(occurrence("baa", "a"));