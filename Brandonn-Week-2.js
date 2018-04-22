// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
var divisbleBy3 = function (num) {
	if (num%3 === 0) {
		console.log( num + " is divisble by 3" );
		} else {
		console.log( num + "is NOT divisble by 3" );
	  }
}
divisbleBy3 (4038);
divisbleBy3 (4039);


// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var brandonn = {
	gender: "male",
	age: 35,
	alive: true,
}
// 3. Given the object below, fill in how to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	},
	getType: function() {
		return this.type
	},
	getGear: function() {
		return this.gear
	},
	getWheels: function() {
		return this.wheels
	}
}

console.log(bicycle.getType());

// Log just the bell from the list of gear
console.log(bicycle.gear[2])

// Log the correct PSI for the tires
console.log(bicycle.wheels.specs[2])

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	let charsArray = str.split("")
	str = charsArray.sort();
	return str;
}
// your code goes here
// keep this function call here
AlphabetSoup("hooplah");
AlphabetSoup("ahhloop");

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
// output of the first function should be: "1 ducks"
var numStrings = []
for( let i=0 ; i<nums.length ; i++ ){
	numStrings.push(nums[i].toString());
}
var numsAndNouns = []
for( let i=0 ; i<nums.length ; i++ ){
	numsAndNouns.push(numStrings[i] + " " + nouns[i])
}
console.log( numsAndNouns )

// Using map to complete Q.5
var nums = [1, 5, 88, 2, 5, 42, 57, 101]
var nouns = ["duck", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
var numStrings = nums.map( num => num.toString() )
var numsAndNouns = numStrings.map( function( num, i ) {
	return (num + " " + nouns[i])
})
