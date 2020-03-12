'use strict';
/*
var Pastry = {
    type: "",
    flavour: "",
    layers: "",
    price: "",
    occasion: "",

    describe: function() {
        return "The " + this.type + " is a " + this.flavour + " flavoured " + " and has " + this.layers + " layers, for " + this.occasion + " at R" + this.price;
    }
}

let dnut = Object.create(Pastry);
dnut.type = "Ring";
dnut.flavour = "Strawberry";
dnut.layers = 2;
dnut.price = 200;
dnut.occasion = "Wedding";

let eclaire = Object.create(Pastry);
eclaire.type = "Eclaire";
eclaire.flavour = "Custard";
eclaire.layers = 1;
eclaire.price = 200;
eclaire.occasion = "Birthday";

console.log(eclaire.describe());
console.log(dnut.describe());
*/

/*
var Pastry = {
    init: function(type, flavour, layers, price, occasion){
        this.type = type;
        this.flavour = flavour;
        this.layers = layers;
        this.price = price;
        this.occasion = occasion;
    },

    describe: function() {
        return "The " + this.type + " is a " + this.flavour + " flavoured " + " and has " + this.layers + " layers, for " + this.occasion + " at R" + this.price;
    },

    bake: function() {
        return "We have baked your " + this.type;
    }
}

let dnut = Object.create(Pastry);
dnut.init('Donut', 'Strawberry', 1, 20, 'Party');

console.log(dnut.describe());

let eclaire = Object.create(Pastry);
eclaire.init('Eclaire', 'Custard', 1, 30, 'Wedding');

console.log(eclaire.describe());

*/

var anObject = {
    a:2
}

document.getElementById("showBtn").addEventListener("click", print(anObject));


function print(obj) {
    document.getElementById("output").innerHTML = obj.a;
}