'use strict';

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White');
var muffin = new Cat('Muffin', 'Brown');

//What happens here is we basically add a new property to muffin object
muffin.age = 10;
console.log(fluffy.age);

//muffin has an age of 10 but muffin's prototype has an age of 4
//Before assinging age to 10, muffin never had an age property, only it's prototype had an age property.
console.log(muffin.age);
console.log(muffin.__proto__.age);

console.log(Object.keys(muffin));
console.log(Object.keys(fluffy));

//When we want to ask Javascript for a property value of an object, it looks first if object has the property and gets it's value, otherwise it looks for the property in it's prototype object

console.log(muffin.hasOwnProperty('age'));
console.log(fluffy.hasOwnProperty('age'));