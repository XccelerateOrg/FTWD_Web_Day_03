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
  let stringLower = string.toLowerCase()
  let targetCharLower = targetChar.toLowerCase()
  let n = 0

  for (let i of stringLower) {
    if (i == targetCharLower) {
      n++
    }
  }
  return n;
}

console.log(occurrence("baa", "a"));
