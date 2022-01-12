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

// for (let i = 1; i <= 30; i++) {
  // CODE HERE
// }

// let example = [];
// let i = 1;
//  while (i<=30) {

// if (i%15 == 0) {
// example.push("Hong Kong");
// }
                 
// else if ((i%3) == 0) {
//   example.push("Hong");
// }
                        
// else if ((i%5) == 0) {
//   example.push("Kong");
// }
                        
// else {
//   example.push(i);
// };
// i++;
// }


// console.log(example);

// OR, Using a for loop

let example = []
for (let i = 1; i <= 30; i++) {
  
  if (i%15 == 0) {
example.push("Hong Kong");
}
                 
else if ((i%3) == 0) {
  example.push("Hong");
}
                        
else if ((i%5) == 0) {
  example.push("Kong");
}
                        
else {
  example.push(i);
}

};

console.log(example);