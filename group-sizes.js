/*
Lets say we have a class of students that we want to separate into groups of three. Inevitably, if there are leftover students, we may need to have some groups of two. A group of one is not something that we want.

Example 1: if we have a class size of 15, we would create 5 groups of 3 and 0 groups of 2 Example 2: if we have a class size of 16, we would create 4 groups of 3 and 2 groups of 2 Example 3: if we have a class size of 17, we would create 5 groups of 3 and 1 group of 2

Write a program that prompts the user for a class size, then logs out the number of groups of 3 the number of groups of 2 that the class would be divided into.
*/

const prompt = require("prompt-sync")({sigint: true});

let size = Number(prompt("How many people are in the class? "));

if (size % 3 === 0){
    console.log("There will be " + (size / 3) + " groups of 3 people.");
} else if (size % 3 === 2){
    console.log("There will be " + ((size - 2) / 3) + " groups of 3 people and 1 group of 2 people.");
} else if (size % 3 === 1){
    console.log("There will be " + ((size - 4) / 3) + " groups of 3 people and 2 groups of 2 people."); 
} else{
    console.log("You blew it! Next time try a number.")
}