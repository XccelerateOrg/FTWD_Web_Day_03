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
  var counter = 0
  var str = string.toLowerCase()
  var trg = targetChar.toLowerCase()

  for (i = 0; i < str.length ; i++){
    if (trg == str.charAt(i)){ counter = counter + 1 }}

    return counter
}

console.log(occurrence("apple", "P"));



/* LOGIC HERE
- convert string to lowercase
- convert targetChar to lowercase
- For loop, if targetChar = string, counter + 1
*/