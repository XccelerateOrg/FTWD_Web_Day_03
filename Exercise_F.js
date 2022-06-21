/**********************************************
 * Exercise F
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that takes two inputs: a string and a character.
 * The function will count the number of times that character appears in the string.
 * The count is case insensitive. */


//Method 1//
function occurrence(string, targetChar) {
  // CODE HERE
 
  let count = (string.match(RegExp(targetChar, "g") ) || []).length; //g=global(search for global)-> find all string
  return(count);
}

console.log(occurrence("baa", "a"));



// Method 2 //
function occurrence2(string, targetChar) {
  // CODE HERE
 
  let count =string.split(targetChar).length - 1;
  return(count);
}

console.log(occurrence2("baa", "a"));


//Method 3//

var result = 0; 
function occurrence3(string, targetChar) {
 
  
  for (var i = 0 ; i < string.length; i++){
    if (string[i] == targetChar) {
        result = result + 1
    } 
  } return result;
}

console.log(occurrence3("baa", "a"));
