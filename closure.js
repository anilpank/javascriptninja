function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function    
  }
  displayName();    
}

init();


function makeFunc() {
    var name = 'Mozilla';
    function display() {
        console.log(name);
    }
    return display;
}

/**
What's different here is that display() inner function was returned from the outer function before being executed.
**/
var myFunc = makeFunc();
//Here myFunc has become a closure.
/**
A closure is a special kind of object that combines two things: a function, and the environment in which that function was created.
The environment consists of any local variables that were in-scope at the time that the closure was created. 
In this case, myFunc is a closure that incorporates both the display function and the "Mozilla" string that existed when the closure was created.
**/

myFunc();

//Below is a more interesting examples.
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

/**
add5 and add10 are both closures. They share the same function body definition, but store different environments. In add5's environment, x is 5. As far as add10 is concerned, x is 10.
**/
var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

/**
You can use a closure anywhere that you might normally use an object with only a single method.
**/
