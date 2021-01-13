/**********************************************
 * Exercise C
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a loop that logs every number from 1 to 30.

If the number is divisible through 3 it should log Hong instead. 
If the number is divisible by 5 it should log Kong instead. 
If the number is divisible by 3 and 5 it should log Hong Kong.

See README.md if you need help running your code.
*/

for (i = 0; ++i < 31; console.log(i % 5 ? x || i : x + "Kong"))
  x = i % 3 ? "" : "Hong";

// OR

function loopyLoop(number) {
  var array = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("Hong Kong");
    } else if (i % 3 === 0 && i % 5) {
      array.push("Hong");
    } else if (i % 5 === 0 && i % 3) {
      array.push("Kong");
    } else array.push(i);
  }
  return array;
}
loopyLoop(30);
