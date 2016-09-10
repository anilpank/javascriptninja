'use strict';
var obj = {};

Object.defineProperty(obj, 'readOnly', {
   enumerable: false,
   configurable:false,
   writable:false,
   value: 'This var is read only'
});

//Now that you are using strict mode this would give an error - Can't assign read only property 
obj.readOnly = 'I wrote this';
console.log(obj.readOnly);