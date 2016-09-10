var obj = {
  a: {
      b: {
          c: 'hello'
      }
  }  
};

console.log(obj.a.b.c);

var c = 'I am new c';
with(obj.a.b) {
    console.log(c);
}