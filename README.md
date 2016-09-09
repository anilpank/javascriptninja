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
- To see if a var exists, use type of undefined.  ```typeof omega !== 'undefined'```


### Configuring JSHint

- You can include more options from http://jshint.com/docs/options/.
- Create a .jshintrc file in the same folder as your javascript file(s).
-  Add corresponding rule in json format as show in .jshintrc file.
- Now go back to your file and save it and you will get your equals error.


### Variables
- Variables behave a bit differently in Javascript.
- **(Hoisting)** Javascript's default behavior of moving all declarations to the top of current scope.
- In other programming languages it is a good practise to declare variables where you use them immediately.
- But in Javascript it is a good practise to make all variable declrations to go on top of your scope. 
- That does not mean you have to initialize everything on top. You just need to declare everything on top of your scope.

### Functions
- Functions in Javascript are first class objects. They are just same as int or string or boolean or object.
- There are function declarations and function expressions.
- It is better to use function declarations instead of function expressions. (For reasons review functions.js).
- While writing javascript Basically Follow the pattern 1) Variables First, 2) Then Functions, 3) Run Code. For examples look at variablesBestPractises.js.


### Behaviors
- Javascript is helpful. That's not always a good thing.
- When you forget to put var in front of variable, Javascript makes it a global variable.


### Strict Mode
- Javascript is trying to help. Don't let it.
- Use ```'use strict';``` as shown in strictMode.js file. That would make sure that unintended code would blow up.
- In production code do not use ```'use strict'``` in global scope. Better do that in function scope. It plays out well in scope.

