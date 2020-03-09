'use strict';

let message = "Hello World!";
console.log(message);

message = "how are you today?";

let name = prompt("Enter firstname", "Enter your name");

let age = Number(prompt("Year you were born: "));

age = 2020 - age;

if(age > 20) {
    console.log("So, you are " + age + ". Hello dino...");
}
else if(age < 20) {
    console.log("So, you are " + age + ". You baby!");
}
else {
    console.log("Right on the cusp, at " + age + " years of age!");
}