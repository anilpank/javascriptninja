function asyncMethod(message) {
    return new Promise(function (fulfill, reject) {
       setTimeout(function() {
           console.log(message);
           fulfill();
       }, 500); 
    });
}

/*
asyncMethod('Open Database Connection').then (function() {
    asyncMethod('Find Our User').then (function() {
        asyncMethod('Validate Our User').then(function() {
            asyncMethod('Do basic Stuff').then(function() {});
        });
    });
});
*/
//How to avoid then

/*
asyncMethod('Open Database Connection').then (findUser);


function findUser() {    
    asyncMethod('Find Our User').then (validateUser);
}

function validateUser() {
    asyncMethod('Validate Our User').then(doBasicStuff);
}

function doBasicStuff() {
    asyncMethod('Do basic Stuff');
}
*/


//Even a better way is to return the promise.
function findUser() {    
    return asyncMethod('Find Our SuperUser');
}

function validateUser() {
    return asyncMethod('Validate Our SuperUser');
}

function doBasicStuff() {
    return asyncMethod('Do basic Stuff');
}


asyncMethod('Open Database Connection')
    .then(findUser)
    .then(validateUser)
    .then(doBasicStuff);