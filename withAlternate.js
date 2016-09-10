'use strict';
var obj = {
  a: {
      b: {
          c: 'hello'
      }
  }  
};

console.log(obj.a.b.c);

var c = 'I am new c';

//There is an alternate to using width statement which solves the purpose.
(function(newVar) {
    console.log(newVar);
}(obj.a.b.c))