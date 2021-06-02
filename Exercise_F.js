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
  function occurrence(str, targetChar) {
    var count =0
    var lowercase = str.toLowerCase()
    for(let i in lowercase){
      if (lowercase[i].indexOf(targetChar)==0){
        count ++
      }
    } return count
  }

console.log(occurrence("baa", "a"));
