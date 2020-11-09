let arrayOfNumbers = [1, 2, 9, 12, 17]
console.log(arrayOfNumbers[4])
console.log(arrayOfNumbers[0])

let string = 'Hello World!'
console.log(string.length)

let word = 'Pertinent'
console.log(typeof word.toLocaleLowerCase)
console.log(word.toLocaleLowerCase())

let sequentialNumbers = [3, 4, 5]; sequentialNumbers.unshift(2);
sequentialNumbers.unshift(1);
console.log(sequentialNumbers);
console.log(sequentialNumbers.shift());
console.log(sequentialNumbers);

let monday = {
    busy: false,
    pizza: ['tuna', 'cheese', 'pepperoni']
}

console.log(monday.busy)
console.log(monday.restock)
monday.restock = false
console.log(monday.restock)


let compass = { north: 12, south: 6 }
console.log(compass.north)
delete compass.north
console.log(compass.north)
console.log('south' in compass)
console.log('north' in compass)

const fluffyBoy = {
    animal: "dog",
    name: "rover",
    colour: "brown"
};
function processObject(object) {
    for (let key in object) {
        console.log(object[key]);
    }
}

processObject(fluffyBoy);

let j = 0;
let text = "";
while (j < 9) {
    text += "The loop has iterated times:" + j + ".";
    j++;
}
console.log(text);