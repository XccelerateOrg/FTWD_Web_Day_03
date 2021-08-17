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
  let stringArray=string.toLowerCase().split('')
  let charCode=targetChar.toLowerCase();
  let count=0;
  for(let value in stringArray)
  {
    if(stringArray[value]==charCode)
    {
      count=count+1;
    }
  }
  return count;
}

console.log(occurrence("baa", "a"));
