'use strict';


function Animal(voice) { 
    this.voice = voice || 'grunt';
}

Animal.prototype.speak = function() {
  console.log(this.voice);  
};

function Cat(name, color) {
    //We do need to call Animal constructor from Cat constructor
    //L1
    Animal.call(this, 'Meow');
    this.name = name;
    this.color = color;
}
/**
Why do we use Object.create here instead of Calling new Animal(). The big difference is Object.create is not going to call Animal Function. It's just going to setup the prototype chain by setting that function as prototype. If we call new it would actually exexute Animal function. We don't want to really do that until we are 
creating instances of Cat.
**/
//L2
Cat.prototype = Object.create(Animal.prototype);
//When we define prototype of Cat here above it also sets Constructor function of Cat to Animal.

Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White');
//console.log(fluffy.__proto__);

//Cat's prototype also has a prototype which is Object
//console.log(fluffy.__proto__.__proto__);

//Object's prototype is null
//console.log(fluffy.__proto__.__proto__.__proto__);

/**
By default all objects in javascript inherit from Object. And Object has no prototype.
**/
console.log('speaking');
fluffy.speak();

//This will result in showing fluffy as instance of Animal.
console.log(fluffy);
//L3
Cat.prototype.constructor = Cat;
console.log(fluffy);


//You just need to do L1, L2 and L3 lines when you are creating a prototype chain.