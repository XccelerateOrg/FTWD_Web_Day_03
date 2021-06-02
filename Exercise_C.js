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
var x = []
for (i = 1; i <= 30; i++) {
if (i%3 == 0 && i%5 == 0) {
  x.push("Hong Kong")
} else if (i%3 == 0 && i%5 !== 0) {
  x.push("Hong")
} else if (i%3 !== 0 && i%5 == 0) {
  x.push("Kong")
} else x.push(i);
};

console.log(x)
