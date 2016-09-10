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
//Now this gets confusing, what does c refer to.
with(obj.a.b) {
    console.log(c);
}