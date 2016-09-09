var myVariable = 10;

function func() {
    myVariable = 25;    
}

console.log(myVariable);
func();
console.log(myVariable);

function func2() {
    myVariable = 30;
    var myVariable;
}
console.log(myVariable);
