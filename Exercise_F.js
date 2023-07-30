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
  //how case insensitive? lower case input
  const lowerString = string.toLowerCase();
  const lowerCharacter = targetChar.toLowerCase();

  //split string into array of letter
  //filter arrayofletters to make new array that contain letter + to character
  //get length of that new array to know how many char are

  const count = lowerString
    .split("")
    .filter((char) => char === lowerCharacter).length;
}

console.log(occurrence("baa", "a"));
