
var obj = function() {
    this.hello = 'hello';
    
    this.greet = function() {
      console.log(this.hello);  
    };
    
    //Here in setTimeout this refers to global object
    this.delayGreeting = function() {
      setTimeout(this.greet, 1000);  
    };
    
    this.delayGreetingWorking = function() {
      setTimeout(this.greet.bind(this), 1000);  
    };
};

obj();

//A new keyword creates a new this scope
var greeter = new obj();
greeter.greet();
greeter.delayGreeting();
greeter.delayGreetingWorking();



