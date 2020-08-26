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
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() == targetChar.toLowerCase()) {
      count++
    }
  }
  return count;
}

console.log(occurrence("baa", "a"));
console.log(occurrence("baa", "A"));
console.log(occurrence("bAa", "a"));
console.log(occurrence("fizzbuzz", "z"));
console.log(occurrence("Fancy fifth fly aloof", "f")); //5