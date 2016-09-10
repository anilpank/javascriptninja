'use strict';
var obj = {
  val: 'Hi There',
  printVal: function() {
      //console.log(this);
      console.log(this.val);
  }    
};

var obj2  = {
    val: 'I am amazing'
};


obj2.printVal = obj.printVal;

//Here obj becomes This.
obj.printVal();

//Javascript basically looks at the left side of the DOT(.)  and that becomes This. So in the below statement obj2 becomes this
obj2.printVal();

var print = obj.printVal;

//Javascript basically looks at the left side of the DOT(.)  and that becomes This. So in the below statement there is no DOT(.) 
//When it is in strict mode, then This becomes undefined.
print();

var printer = obj.printVal.bind(obj2);
printer();

