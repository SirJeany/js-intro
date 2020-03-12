'use strcit';

function Pastry(type, flavour, layers, price, occasion) {
    this.type = type;
    this.flavour = flavour;
    this.layers = layers;
    this.price = price;
    this.occasion = occasion;
}

Pastry.prototype.describe = function() {
    return "This is a " + this.flavour + " " + this.type;
}

Pastry.prototype.bake = function (){
    return "You are baking a " + this.type;
}

let dnut = new Pastry('Donut', 'Chocolate', 1, 25, 'Party');

console.log(dnut.describe());

let eclaire = new Pastry('Eclaire', 'Strawberry');
console.log(eclaire.bake());