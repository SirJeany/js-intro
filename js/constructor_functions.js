'use strcit';
/*
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
*/
// Create a furniture shop with 5 different products.

function Furniture(type, color, price, materials, img) {
    this.type = type;
    this.color = color;
    this.price = price;
    this.materials = materials;
    this.img = img;
}

Furniture.prototype.describe = function() {
    return "This is a designer " + this.type + "with: \n" + "Colour: " + this.color + "\n" + "Price: " + this.price + "\n" + "Matrials: " + this.materials + "\n" + "img: " + this.img + "\n";
}

Furniture.prototype.build = function() {
    return "Building a " + this.type;
}


//TEST

var anObject = {
    a:2
}

document.getElementById("showBtn").addEventListener("click", print(anObject));


function print(obj) {
    document.getElementById("output").innerHTML = obj.a;
}