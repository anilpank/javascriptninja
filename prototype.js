'use strict';
var arr = ['red', 'blue', 'green'];

Object.defineProperty(Array.prototype, 'last',{
   get: function() {
       return this[this.length-1];
   } 
});

var last = arr[arr.length-1];
console.log(last);

console.log(arr.last);

var anotherArr = ['one', 'two', 'three'];
console.log(anotherArr.last);
//Array object is a function that is meant to be used as a constructor function
console.log(Array);
console.log(Array.prototype);

//Functions have prototype property which is nothing but an empty object
var myFunc = function() {};
console.log(myFunc.prototype);

//An object literal does not have a prototype property.
var cat = {name: 'fluffy'};
console.log(cat.prototype);
//Although it does have a __proto__ property.
console.log(cat.__proto__);

/*
A function's prototype is the object instance that will become prototype for all objects created using this function as a constructor.

An Object's prototype is the object instance from which the object is inherited.

A prototype is not like a class. It is an object.
If a function is created, a prototype object is created and attached to it behind the scenes.
If this function is used as a constructor function with a new keyword, the object that is created, it's __proto__ property points to same as function's prototype.
See the examples below.
*/

function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype.age = 3;
console.log(Cat.prototype);
var fluffy = new Cat('Fluffy', 'White');
var fluffy2 = new Cat('Fluffy', 'White');
var ninja = new Cat('Ninja', 'Black');
console.log(fluffy.prototype);
console.log(fluffy.__proto__);
console.log(fluffy.__proto__ === Cat.prototype);
console.log(fluffy2 === fluffy);
console.log(fluffy.__proto__ === fluffy2.__proto__);
console.log(ninja.__proto__);