'use strict';
// While loop implementation:
// console.log("------START------");

// let num = 0;
// while(num <= 10) {
//     console.log(num);
//     num = num + 2;
// }

// console.log("------END-------")

// for loop (note that the loops seem similar at first, but output is different)
// console.log("------START------");

// num = 0;
// for(let i = 0; i <= 10; i++) {
//     console.log(num);
//     num = num + 2;
// }

// console.log("------END-------")

// Ten passangers to board a train. Not concerned with the order of boarding.. Use a for loop to board them, one-by-one until we get to ten.

console.log("------START TRAIN------");

let passNum = 1;
for(let i = 1; i <= 10; i++) {
    console.log("Hi, welcome to the train, passanger number " + passNum);
    passNum++;
}

console.log("------END TRAIN-------")
