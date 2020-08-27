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



  // CODE HERE
  var num = new Array();
  for (let i = 1; i <= 30; i++) {
		if (((i+1)%3 == 0) && ((i+1)%5 == 0)) {
			num[i] = "Hong Kong"
		} else if ((i+1)%3 == 0){
			num[i] = "Hong"
		} else if ((i+1)%5 == 0) {
			num[i] = "Kong"
		} else {
			num[i] = i+1
		}
  }
  console.log(num)
