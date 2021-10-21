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
  let stringLength = string.toString().length;
  let counter = 0;
  for (i = 0; i < stringLength; i++) {
    if (string[i] == targetChar) {
      counter++;
    };
  };
  return console.log(counter);
};

occurrence("baa", "a");
