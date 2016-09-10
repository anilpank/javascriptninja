/**
delete keyword can only delete something from an object. It can't delete variables or objects. It just fails silently.
**/
var obj = {a: 100, b:200};
var myVar = 10;
console.log(obj);
delete obj.a;
delete myVar;
delete obj;

console.log(obj);
console.log(myVar);