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

let x = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

function findhk() {

  y = []
  for (let i = 1; i <= 30; i++) {
    if (x[i] % 3 == 0 && x[i] % 5 == 0) {
     y.push("Hong Kong")
    }
    else if (x[i]%5 == 0) {
     y.push("Kong")
    }
    else if (x[i]&3 == 0) {
     y.push("Hong")
    }
    else {
     y.push(i)
    }
  }
  return y
}

console.log(findhk(x))
