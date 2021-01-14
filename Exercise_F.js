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
  letters= string.split("");
  i=0;
  for(var x of string){
    if (x ===targetChar) i+=1;
  }
  console.log(i)
}

console.log(occurrence("baa", "a"));
