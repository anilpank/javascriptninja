'use strict';

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White');
var muffin = new Cat('Muffin', 'Brown');

//What if we change Cat function's prototype to point to a different object. It does not change Cat's age.
Cat.prototype = {age:5};
console.log(fluffy.age);
console.log(muffin.age);
//But if we check Cat protytpe's age, it does have a changed age.
console.log(Cat.prototype.age);

//If we create a new Cat after chaning a function's prototype, it's age is changed.
var snowbell = new Cat('Snowbell', 'Silver');
console.log(snowbell.age);

/*
Let's see what really happenned. Initially the Cat function and 2 instances of Cat, all are pointing to same prototype instance (say A) in memory. 
When we change the prototype of our function, what we really did was create a new Object (B) in memory and change the function's prototype property to point to that new Object (B). However the existing 2 instances (fluffy and muffin) point to same older prototype object (A).
When we created new snowBell Cat, it created a new Object and set it's instance to point to current prototype of our function (B)
*/