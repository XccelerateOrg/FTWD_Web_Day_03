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
  count = 0;
  for (var letters in string) {
    if (targetChar.localeCompare(string[letters]) >= 0) {count++};
  };
  return count
};

console.log(occurrence("baa", "A"));