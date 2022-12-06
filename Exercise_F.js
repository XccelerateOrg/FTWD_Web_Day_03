/**********************************************
 * Exercise F
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that takes two inputs: a string and a character.
 * The function will count the number of times that character appears in the string.
 * The count is case insensitive. */


 let matchedWord = 0

function occurrence(string, targetChar) {
  // CODE HERE

for (let i = 0; i < string.length; i++) {

let matchText = string.slice(i,i+1)

if (targetChar == matchText){
matchedWord += 1
}

}

return matchedWord

}

console.log(occurrence("baa", "a"));


