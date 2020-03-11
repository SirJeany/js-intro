// Vars:
let name;
let ing;

// Functions:
function cook(name, ingredient) {
    alert("Cook " + name + " will prepare the "  + ingredient);
}

// Main program:
do{
    name = prompt("Please insert name of cook: ");

    ing = prompt("Please insert the ingredient for cook: ");

    cook(name, ing);
}while(name)

