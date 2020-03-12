'use strict';

let skeletolDragon = {
    class: "Dragon",
    type: "Skeleton",
    color: "White",
    attack: 1000,
    defense: 2000,
    describe: function() {
        var print = "From within: This creature is a " + this.color + ", " + this.type + " " + this.class + " with an attack of " + this.attack + " and a defense of " + this.defense;
        return print;
    },
    attacks: function(defender) {
        console.log(this.class + " attacks " + defender.class);
        if(defender.defense < this.attack){
            console.log("Defeated the " + defender.type + " " + defender.class);
        }
        else {
            console.log("Defender shrugged off the attack!");
        }
    }
}

let darkElf = {
    class: "Elf",
    type: "Dark",
    color: "Emerald",
    attack: 100,
    defense: 200,
    describe: function() {
        var print = "From inside: This creature is a " + this.color + ", " + this.type + " " + this.class + " with an attack of " + this.attack + " and a defense of " + this.defense;
        return print;
    },
    attacks: function(defender) {
        console.log(this.class + " attacks " + defender.class);
        if(defender.defense < this.attack){
            console.log("Defeated the " + defender.type + " " + defender.class);
        }
        else {
            console.log("Defender shrugged off the attack!");
        }
    }
}

// function printObject(obj) {
//     var print = "This creature is a " + obj.color + ", " + obj.type + " " + obj.class + " with an attack of " + obj.attack + " and a defense of " + obj.defense;
//     return print;
// }

// console.log(printObject(skeletolDragon));
// console.log(printObject(darkElf));

console.log(skeletolDragon.describe());
console.log(darkElf.describe());

skeletolDragon.attacks(darkElf);
darkElf.attacks(skeletolDragon);

/*
const cake = {
    flavour: "Chocolate",
    price: "400 Madibas, 30 Franklins",
    layers: "6 rows, 10 cols",
    occasion: "Aniversary"
};

// cake.occasion = "Wedding";
cake.layers = 600;
cake.price = "R1200";

console.log("For Ann and Frank's " + cake.occasion + " they ordered a " + cake.flavour + " cake with " + cake.layers + " layers with a price of " + cake.price + ".");

let a = "Old a";
const message = a;
a = "hello";
console.log(message);
*/