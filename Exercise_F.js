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
  let newStr = string.toLowerCase()
  let newChar = targetChar.toLowerCase()
  let count = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === newChar)
      count++;
  } return count;
}

console.log(occurrence("baacccss", "C"));
