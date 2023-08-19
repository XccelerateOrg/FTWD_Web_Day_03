/**********************************************
 * Exercise F
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that takes two inputs: a string and a character.
 * The function will count the number of times that character appears in the string.
 * The count is case insensitive. */

let count = 0
function occurrence(string, targetChar) {
	let array = Array.from(string)
	array.map((n) => {
		if (n === targetChar || n.toUpperCase() === targetChar) {
			delete array.indexOf(targetChar)
			count += 1
		} else {
			return
		}
	})

	return count
}

console.log(occurrence('baa', 'a'))
