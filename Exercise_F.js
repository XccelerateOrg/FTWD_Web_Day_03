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
  let newArray = string.replace(/\s+/g, "").split("");
  console.log(newArray);
  let trueArray = [];
  for (i = 0; i < newArray.length; i++) {
    if (newArray[i] === targetChar) {
      trueArray.push(newArray[i]);
    }
  }

  return trueArray.length;
}

console.log(occurrence("aaba", "a"));
