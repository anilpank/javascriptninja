
var obj = function() {
    //Now var _this will always refer to this new obj and not any global this
    //This allows to maintain this reference.
    var _this = this;
    _this.hello = 'hello';
    
    _this.greet = function() {
      console.log(_this.hello);  
    };
    
    //Here in setTimeout this refers to global object
    _this.delayGreeting = function() {
      setTimeout(this.greet, 1000);  
    };    
};

obj();

//A new keyword creates a new this scope
var greeter = new obj();
greeter.greet();
greeter.delayGreeting();




