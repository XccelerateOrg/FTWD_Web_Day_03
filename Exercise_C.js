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

for (var i = 1; i <= 30; i++) {

  // using switch for fun, Would like a comment if this is the better way or not.
  // Also i've used Console.log() because the question asks to log the result.
  switch (true) {
    case i % 15 === 0:
      console.log("Hong Kong");
      break;
    case i % 5 === 0:
      console.log("Kong");
      break;
    case i % 3 === 0:
      console.log("Hong");
      break;
    default:
      console.log(i);
      break;
  };
};
