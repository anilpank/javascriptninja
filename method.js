'use strict';
console.log("In Method.js");

//This is an example of object with a method.
//This is basically an object literal
var myCoffee = {   
    flavor: "expresso",
    temparature: "piping hot",
    ounces : 100,
    milk : true,
    
    //method
    reheat: function() {
        if (myCoffee.temparature != "piping hot") {
            myCoffee.temparature = "piping hot";
            console.log("Your coffee has been reheated");
        }
    }
};

console.log("How is mycoffee initially:" + myCoffee.temparature);
myCoffee.temparature = "Get it cold";
console.log("How abt after some time:" + myCoffee.temparature);
myCoffee.reheat();