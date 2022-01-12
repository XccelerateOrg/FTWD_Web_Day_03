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
  let letterCount = 0;
  lowerstring = string.toLowerCase();
  for (i = 0; i < string.length; i++)
    if (lowerstring.charAt(i) == targetChar) {
      letterCount += 1;
    }
  return letterCount;
}

console.log(occurrence("baat ouwe lekker gaan kra Kra kra ", "k"));
