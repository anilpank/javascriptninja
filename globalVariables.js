var toPrint = "print me";

function print(out) {
    //When you forget to put var in front of variable, Javascript makes it a global variable.
    stringToPrint = out;
    console.log(stringToPrint);
}

print('Hello');
console.log(stringToPrint);