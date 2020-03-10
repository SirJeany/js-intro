// THis program is going to give the user a suggestion for what to wear based on the weather conditions outside.
// The user gives the input.
// Using if and else if, then try using the switch statement to create the same program.

'use strict';

let sunnyMsg = "It's sunny! Go out and surf!";
let windyMsg = "A little windy... Have you ever tried kite-surfing?";
let rainyMsg = "Siiiiinging in the rain... Nah, stay inside and work on your hobbies.";
let snowyMsg = "Brrrr... Go warm up with a hike?";
let errorMsg = "Sorry, it doesn't seem like you inserted the correct weather condition.";

let name; // User name.
let weatherCondition; // A number that will hold the weather condition inserted by the user.
let choice; // Would you like to use if or switch?

name = prompt("Welcome to WEAHTER-WEAR. We help you decide what to wear today, so you don't have to! Please insert yer name:", "Jean");

choice = Number(prompt("Would you like to (1) go via if-statements, or (2) via swtich?"));

weatherCondition = Number(prompt("Please insert the appropriate number corrosponding to the weather outside currently: \n" + "1) Sunny. \n" + "2) Windy. \n" + "3) Rainy \n" + "4) Snowy."));

if (choice == 1){
    alert("If enabled.");
    if(weatherCondition == 1) {
        alert("Yo, " + name + ". " + sunnyMsg);
    }
    else if (weatherCondition == 2) {
        alert("Bro! " + windyMsg);
    }
    else if (weatherCondition == 3) {
        alert("Hey " + name + ". " + rainyMsg);
    }
    else if (weatherCondition == 4) {
        alert(snowyMsg);
    }
    else {
        alert(errorMsg);
    }
}
else {
    alert("Switch enabled.");
    switch (weatherCondition) {
        case 1:
            alert("Yo, " + name + ". " + sunnyMsg);
            break;
        
        case 2:
            alert("Bro! " + windyMsg);
            break;

        case 3:
            alert("Hey " + name + ". " + rainyMsg);
            break;

        case 4:
            alert(snowyMsg);
    
        default:
            alert(errorMsg);
            break;
    }
}