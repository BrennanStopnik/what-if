/*
Julio Cesar Chavez Mark VII is an interplanetary space boxer, who currently holds the championship belts for various weight categories on many different planets within our solar system. However, it is often difficult for him to recall what his "target weight" needs to be on earth in order to make the weight class on other planets. Write a program to help him keep track of this.

It should ask him what his earth weight is, and to enter a number for the planet he wants to fight on. It should then compute his weight on the destination planet based on the table below:

#	Planet	Relative gravity
1	Venus	0.78
2	Mars	0.39
3	Jupiter	2.65
4	Saturn	1.17
5	Uranus	1.05
6	Neptune	1.23

So, for example, if Julio weighs 128 lbs. on earth, then he would weigh just under 50 lbs. on Mars, since Mars' gravity is 0.39 times earth's gravity. (128 * 0.39 is 49.92).
*/

const prompt = require("prompt-sync")({sigint: true});

let weight = Number(prompt("Enter your Earth weight in pounds: "));
let planet = Number(prompt("What planet are you fighting on (1: Venus, 2: Mars, 3: Jupiter, 4: Saturn, 5: Uranus, 6: Neptune)? "));


if (planet === 1){
    console.log("Your weight on Venus will be " + (weight * 0.78));
} else if (planet === 2){
    console.log("Your weight on Mars will be " + (weight * 0.39));
} else if (planet === 3){
    console.log("Your weight on Jupiter will be " + (weight * 2.65));
} else if (planet === 4){
    console.log("Your weight on Saturn will be " + (weight * 1.17));
} else if (planet === 5){
    console.log("Your weight on Uranus will be " + (weight * 1.05));
} else if (planet === 6){
    console.log("Your weight on Neptune will be " + (weight * 1.23));
} else {
    console.log("Something went sideways. Try again.")
}