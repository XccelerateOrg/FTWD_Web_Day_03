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
function fizzBuzz(number) {
  for (let i = 1; i <= 30; i++) {  // no need i<number.length,input is not an array
    if (i % 3 == 0 && i % 5 == 0)                 // this condition should go first
    { console.log('Hong Kong') }     // should use (), not[]
    else if (i % 3 == 0)                //should not use number, coz number=21
    { console.log('Hong') }
    else if (i % 5 == 0)                // should not use =, should use ==
    { console.log('Kong') }
    else { console.log(i) } //should use i, not number
  } return number;
}
fizzBuzz(30)
 //should not input an array here
 //fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15])