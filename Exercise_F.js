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
  
  let count=0;
  for(let i=0; i<string.length; i=i+1){
    let currentChar=string.charAt(i);
    

    if (currentChar==targetChar){
      count=count+1;
    }
  }
  
  return count;
}

console.log(occurrence("baa", "a"));
