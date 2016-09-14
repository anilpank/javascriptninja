/**
Some objects defined by browser include
Document
Window - Global Object is the browser window itself.
Element
Event
Node
Comment
Console

Core Objects are objects defined by and built into the Javascript language itself.

Math
Object
String
Boolean
Array
Date
Number

All other objects are defined by coder as needed.
    
**/

'use strict';
var cat = {
  name: 'fluffy',
  color: 'white'    
};
Object.defineProperty(cat,'name', {writable:false});
//cat.name='Nice';
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));

for (var propertyName in cat) {
    console.log(propertyName + ":" + cat[propertyName]);
}

console.log(Object.keys(cat));
console.log(JSON.stringify(cat));