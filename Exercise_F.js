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
  let split_string_array = string.split(''); 
      // console.log(split_string_array);          //[ 'b', 'a', 'a' ]
      // console.log(split_string_array.length);   // 3
      // console.log(split_string_array[0]);       // b
      // console.log(targetChar);                  // a
  let counter = 0;
  for (let i = 0 ; i < split_string_array.length; i++){
    if (split_string_array[i] === targetChar) {
       counter = counter + 1;
    }
  }
  return counter;
}

console.log(occurrence("baa", "a"));
