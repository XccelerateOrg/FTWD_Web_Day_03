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
  // const array = string.split("");
  let times =0;
  let newString = string.toLowerCase();
  for (let i=0; i < newString.length; i++){
    if (newString[i]===targetChar){
      times+=1
    }
  }
  return times
}

console.log(occurrence("baa", "a"));
