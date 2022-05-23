/*
Write a program that prompts the user for a number, then displays the appropriate day of the week according to the table below.

number	        day
1	            Monday
2	            Tuesday
3	            Wednesday
4	            Thursday
5	            Friday
6	            Saturday
7	            Sunday
anything else	"error"
*/

const prompt = require("prompt-sync")({sigint: true});

let num = Number(prompt("Enter a number between 1 and 7: "));

if (num === 1) {
    console.log("You picked Monday.");
} else if (num === 2) {
    console.log("You picked Tuesday.");
} else if (num === 3) {
    console.log("You picked Wednesday.");
} else if (num === 4) {
    console.log("You picked Thursday.");
} else if (num === 5) {
    console.log("You picked Friday.");
} else if (num === 6) {
    console.log("You picked Saturday.");
} else if (num === 7) {
    console.log("You picked Sunday.");
} else {
    console.log("Error.")
}
