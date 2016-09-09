var x = 1;
var y = '1';
var z;

if (x == y) {
    console.log('Equals');
}
else {
    console.log('Not Equals');
}


if (x === y) {
    console.log('Triple Equals');
}
else {
    console.log('Triple Not Equals');
}

// This is actually equivalent to if (x == true)
if (x) {
    console.log('x exists');
}
else {
    console.log('x does not exist');
}

if (z) {
    console.log('z exists');
}
else {
    console.log('z does not exist');
}

var w=0;
//this is how this check fails
if (w) {
    console.log('w exists');
}
else {
    console.log('w does not exist');
}

//this is where it blows up
/*
if (omega) {
    console.log('omega exists');
}
else {
    console.log('omega does not exist');
}
*/

//The right way to do the check
if (typeof omega !== 'undefined') {
    console.log ('omega exists');
}
else {
    console.log('omega does not exist');
}

console.log (typeof x)
console.log (typeof y)
console.log (typeof z)
console.log (typeof w)
console.log (typeof omega)




