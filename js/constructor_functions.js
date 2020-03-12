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
    return "This is a designer " + this.type + " that is: \n" + "Colour: " + this.color + "\n" + "Price: R" + this.price + ".00\n" + "Matrials used: " + this.materials + "\n" + "img: " + this.img + "\n";
}

Furniture.prototype.build = function() {
    return "Building a " + this.type;
}

// High Chair:
let highChair = new Furniture('High chair', 'Black', 3000, ['Steel', 'Wood'], 'path/to/img');

console.log(highChair.describe());

// Marble Table:
let marbleTable = new Furniture('Marble Table', 'White and grey', 10000, ['Marble', 'Wood'], 'path/to/img');

console.log(marbleTable.describe());

// Crazy Couch:
let crazyCouch = new Furniture('Crazy couch', 'Black', 3000, ['Leather', 'Wood'], 'path/to/img');

console.log(crazyCouch.describe());


// Squazy TV stand:
let squazyTV = new Furniture('Squazy TV stand', 'Red', 3000, ['Wood', 'Glass', 'Steel'], 'path/to/img');

console.log(squazyTV.build());


// Outside Chair:
let outsideChair = new Furniture('Outside Chair', 'White', 3000, ['Stainless Steel'], 'path/to/img');

console.log(outsideChair.describe());




//TEST

// var anObject = {
//     a:2
// }

// document.getElementById("showBtn").addEventListener("click", print(anObject));


// function print(obj) {
//     document.getElementById("output").innerHTML = obj.a;
// }