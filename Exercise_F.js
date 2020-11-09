/**********************************************
 * Exercise F
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that takes two inputs: a string and a character.
 * The function will count the number of times that character appears in the string.
 * The count is case insensitive. */

function countChar(string, targetChar) {
  // CODE HERE
  let arrString = string.split('')
  let counter = 0
  // console.log(arrString)
  for (i = 0; i <= string.length; i++) {
    if (targetChar.toLowerCase() == arrString[i]){
      counter++
    } else if(targetChar.toUpperCase() == arrString[i]){
      counter++
    }
  }
  return counter
}

console.log(countChar("baa", "a"))
console.log(countChar("fizzbuzz","z"))
console.log(countChar("Fancy fifth fly aloof","f"))
