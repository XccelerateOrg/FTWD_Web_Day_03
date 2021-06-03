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
  var criti = new RegExp(targetChar,'g');
  let count = (string.match(criti) || []).length;
  return count;

  // return string.split(targetChar).length-1;     <--this is from james for reference

} 

console.log(occurrence("baa", "a"));
