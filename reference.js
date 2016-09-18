function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

var smallRect = new Rectangle(10,3);
console.log(smallRect);

function halfIt(rectangle) {
    rectangle.width = rectangle.width/2;
    rectangle.length = rectangle.length/2;
    console.log(rectangle);
}

halfIt(smallRect);
console.log('After halfing original rectange check small Rectangle');
console.log(smallRect);
//What this means is that in Javascript everything is passed by reference (except primitive types which are passed by value just like Java).
