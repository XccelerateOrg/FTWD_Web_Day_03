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
let o = [];
for (let i = 1; i <= 30; i++) {
  // CODE HERE
  if ((i % 3 === 0) & (i % 5 === 0)) {
    o.push("Hong Kong");
  } else if (i % 3 === 0) {
    o.push("Hong");
  } else if (i % 5 === 0) {
    o.push("Kong");
  } else {
    o.push(i);
  }
}

console.log(o);
