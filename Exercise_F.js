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
  let numberOfTimes = 0;
  for (i=0;i<string.length;i++) {
    if (string[i] === targetChar) {
      numberOfTimes += 1;
    }
  } return numberOfTimes;
}

console.log(occurrence("baa", "a"));
