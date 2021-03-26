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
  let allTargetChar = [];
  let j = string.length;
  let upString = string.toUpperCase();
  let upTargetChar = targetChar.toUpperCase();
      for(let i=0; i < j; i++) {
        if (upString[i]==upTargetChar){
        allTargetChar.push(targetChar);
        } 
      }  
      console.log(allTargetChar);
  return allTargetChar.length;
}


console.log(occurrence("baa", "a"));