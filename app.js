//This is app.js

//Created a simple asynchronous method
function asyncMethod(message, cb) {
    setTimeout(function() {
        console.log(message);
        cb();
    }, 500);
}

//Classic Christmas Tree Code
asyncMethod('Open DB connection', function() {
   asyncMethod('Find User', function() {
       asyncMethod('Validate User', function() {
           asyncMethod('Do stuff', function(){});
       });
   }); 
});