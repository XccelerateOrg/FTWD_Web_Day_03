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
  let counter = 0;
  let split = string.split("");
  for (let i=0; i <split.length; i++){
    if(split[i]===targetChar){
    counter = counter +1
  }}
  return counter;

}

console.log(occurrence("abc", "a"));
