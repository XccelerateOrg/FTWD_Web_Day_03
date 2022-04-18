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
  for(characters of string) {
      if(targetChar === characters) {
          ++count;
      }
  }
  return count;
}

console.log(occurrence("baa", "a"));

