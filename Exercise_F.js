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
  if (targetChar == null || string.length == 0)
  {
    return;
  } 
  var count = 0;
  for(var i = 0; i < string.length; i++)
  {
    if(targetChar == string[i])
    {
      count++;
    }
  }
  return count;
}

console.log(occurrence("baa", "a"));
