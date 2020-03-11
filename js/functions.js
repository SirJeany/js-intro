'use strict';

function sayHello(name, surname) {
    let message = "My name is, ";
    // console.log(message);
    return message + surname + ", " + name + " " + surname;
}

let name = prompt("Please insert your name:");
let surname = prompt("Please insert your surname:");
console.log(sayHello(name, surname));


