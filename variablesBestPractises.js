//FOLLOW THIS IF YOU DON'T WANT TO WORRY ABOUT HOISTING.
//variables first
 var x = 10;
//functions next
function print(input) {
    //variables first
    var x = 0; // this goes here.
    //functions next
    function log() {
        //log here
    }
    //run code
    console.log(input);
}
//run code
print(10);


/**
Basically Follow the pattern
1) Variables First
2) Then Functions
3) Run Code
**/