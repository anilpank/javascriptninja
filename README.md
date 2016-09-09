# javascriptninja
Best practices for Javascript

While working on multiple web projects, we started with Javascript, introduced JQuery, then Ext JS and AngularJS and now contemplating React. While every new library/framework brought some value, technical debt kept piling. So we have decided to go back to Javascript/JQuery so that products can be easily maintained. So here we would cover basics of writing good Javascript and JQuery code.

### WHY

- Javascript is a secondary language for most developers.

- What is 'THIS' - Not very clear to most javascript developers.

- Tools available to us which make our code better.

ECMAScript standards
http://www.ecma-international.org/ecma-262/7.0/index.html

### SEMICOLONS
- Semicolons are optional in Javascript (myth)
- Certain ECMAScript statements must be terminated with semicolon.  (ECMAScript standards)
- For convenience. however such semicolons may be omitted from the source text in certain situations. (ECMAScript standards)
- These situations are described by saying that semicolons are automatically inserted. (ECMAScript standards)
- If you want to avoid worrying about all these rules then use semicolons in conjunction with JSHint  (or ESLint) to prevent potential issues.
- Using semicolons has advantage of consistency with other languages.
- Using semicolons prevents .01% of major head breaking issues.

### LINTING
- A linter scans your code to detect potential problems and errors.
- JSLint first linter created  (2002, preconfigured), not very configurable
- JSHint (fork of JSLint), much more configurable, built in package support, not extensible
- ESLint  (most recent), custom rules support, lots of configuration. (Not good for someone new)

#### JSHint Options
- Go to browser http://jshint.com/. Paste your code and you get the warnings.
- Use Brackets editor and install JSHint extenstion. Then you can see all the error when you work on your javascript file.
- Another option is to install jshint through npm (npm install -g jshint) and then from command line run it on a file (jshint code.js)

### Curly Braces
- The recommendation for curly braces is to put opening curly braces on the same line.
```javascript
function service(){
   var get = function() {
       console.log('get');
   }
   var set = function() {
       console.log('set');
   }
   return {
       get: get,
       set: set
   }
}
```

### Equality
- How do I compare things in Javascript  == vs ===
```javascript
var x = 1;
var y = '1';

if (x == y) {
    console.log('Equals');
}
else {
    console.log('Not Equals');
}
```
- The above code will print Equals.
- In order to test a Javascript file, you need not always use browser. Just type node testEquals.js from command line.
- == If variables are of different type, it will convert it to same time.
- === There is no type conversion.
- Generally we want to use ===
- Bottom line is use === by default (this avoids automatic type conersions and cases when you want 0 as true value).
- To see if a var exists, use type of undefined. typeof *omega !== 'undefined'*













