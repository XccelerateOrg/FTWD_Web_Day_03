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
  let sString = string.split("")
  let newarr = [];
  for (i=0; i < sString.length; i++){
    if (targetChar === sString[i]) {
      newarr.push(1)
    }
  } return newarr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(occurrence("baa", "a"));
