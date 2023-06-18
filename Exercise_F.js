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
  let count = 0;
  let lowercaseString = string.toLowerCase();
  let lowercaseTarget = targetChar.toLowerCase();
  for (i = 0; i < string.length; i++) {
    if (lowercaseString.charAt(i) === lowercaseTarget) {
      count += 1;
    }
  }
  return count;
}

console.log(occurrence("baa", "A"));
