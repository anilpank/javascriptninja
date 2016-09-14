'use strict';
//Example of a constructor

//Best practise to start constructor name by capital letter
function Friend(name, tshirtColor) {
    this.name = name;
    this.tshirtColor = tshirtColor;
}

var denny =  new Friend("anil", "green");

console.log(denny.name);
console.log(this);