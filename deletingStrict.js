'use strict';
var obj = {a: 100, b:200};
var myVar = 10;
console.log(obj);
delete obj.a;
delete myVar;
delete obj;

console.log(obj);
console.log(myVar);
