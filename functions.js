
//expression(); 
//This would give error. Expression is not a function

//This is a function declaration
function myFunc() {
    console.log('Hi From My func');
}

myFunc();

var expression = function () {
    console.log('Hi From the expression');
}

yourFunc();
expression(); 
function yourFunc() {
    console.log('Your func');
}