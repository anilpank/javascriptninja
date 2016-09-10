var obj = {
  val: 'Hi There',
    //It does not matter where function is declared, for example here in obj. What matters where the function is executed.
  printVal: function() {
      //console.log(this);
      console.log(this.val);
  }    
};

var obj2  = {
    val: 'I am amazing'
};

//Javascript basically looks at the left side of the DOT(.)  and that becomes This. So in the below statement obj2 becomes this
obj2.printVal = obj.printVal;

//Here obj becomes This.
obj.printVal();

obj2.printVal();

//Javascript basically looks at the left side of the DOT(.)  and that becomes This. So in the below statement there is no DOT(.) Hence it defaults 
//to binding to Global object.
var print = obj.printVal;

print();
//You can bind the function to an object. So here This refers to obj2
var printer = obj.printVal.bind(obj2);
printer();
