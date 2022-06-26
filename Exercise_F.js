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
    let count = "";
    for (let i = 0; i < string.length; i++){
      if(string.charAt(i) === targetChar){
        count++
      }
    }
    return count;
  
  }
console.log(occurrence("applea", "a"));

