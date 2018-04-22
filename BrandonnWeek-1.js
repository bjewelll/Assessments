// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

if(true) {
  console.log("You'll never see this message!")
} else {
  console.log("This message is visible")
}
// im not sure but i believe the boolean needs to be false

// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.

for(let i = 10; i >= 0; i--) {
//create a index of i have it equal to 10 so the count starts at 10
  console.log(i);
//log my code with console
}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".
var list = [1, 2, 3, 4]
console.log(list[1])
list[3] = "duck"




// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.

if(door = "open"){
  closeDoor()
} else {
  openDoor()
}

//another wayof doing it is
var door = "open"
if (door == "open") {
  door = "close"
  console.log("Door is now closed")
} else {
  console.log("Door is closed")
}

// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function sumLess20(x, y) {
  var z = x + y;
  if (z < 20){
    console.log(z)}
      else if (z > 20){
        console.log("I cant count that high!")}
          else{
            console.log("The sum is 20")
  }
}
