/**********************************************
 * Exercise F
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that takes two inputs: a string and a character.
 * The function will count the number of times that character appears in the string.
 * The count is case insensitive. */

function occurrence(str, char) {
  var count = 0;
  var newStr = str.toLowerCase();
  var newChar = char.toLowerCase();
  for(let i=0; i<str.length; i++){
    if (newStr[i]==newChar){
      count++
    }
  }
  return count;
}

console.log(occurrence("baa", "a"));
