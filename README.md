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

### Read only properties
- Have a look at example readOnlyFields.js. If you don't use strict mode, and make a property read only, if you assign some value to the property, value does not get changed and you don't even get an error.
- When you use strict mode, then you would get a valid error TypeError: Cannot assign to read only property. Have a look at readOnlyFileStrict.js

### Deleting Stuff
- delete keyword can only delete something from an object. It can't delete variables or objects. It just fails silently. (Review deleting.js)
- When you use strict mode, you get an error (Delete of an unqualified identifier in strict mode).  Review deletingStrict.js. 

### Duplicates
- There can be cases where you accidently put duplicate param names in method arguments. Then if you don't have strict mode, Javascript takes later argument and uses it's values. Have a look at duplicate.js
- When you use strict mode, then you get SyntaxError: Duplicate parameter name not allowed in this context. Have a look at duplicateStrict.js.

### Numbers
- If you put 0 in front of a number, javascript becomes helpful and thinks of it as an Octal Number. Refer to octal.js
- When you use strict mode, then you get an error Octal literals are not allowed in strict mode.
- When you really want to use Octal, use parseInt function.

### The with statement
- When you are inside a with block, it violates lexical scope, making program analysis hard to infeasible. (Look at with.js).
- When you use strict mode, you get error Strict mode code may not include a with statement.
- There is an alternate way of achieving the same without with. It is through immediate function expression. Have a look at withAlternate.js.

### What is THIS
- This is the most confusing thing in Javascript.
- Javascript basically looks at the left side of the DOT(.)  and that becomes This. (have a look at this.js)
- When there is no DOT(.) Then it defaults to binding to Global object.
- With strict mode, when there is no DOT(.), it does not default to anything. It is undefined.
- There is one more way when you can bind a function to an object. Refer to this.js.
- It does not matter where function is declared, for example here in obj. What matters where the function is executed.
- A new keyword creates a new this scope. Have a look at this.js
- Inside an object this might refer to local this or gloabl this adding to confusion.
- Ultimate best practise is when you are dealing with This keyword, it is easier to take a copy of it and use the copy throughout rather than always figure out what this might refer to. (Refer to thatObj.js for reference)

### Async Patterns
- Callbacks (Gross looking code, christmas tree code).
- Promises 
- Async

### Callbacks
- Nest callback in callback in callback ending up in christmas tree code which is difficult to debug.
- One way to get rid of this callback hell cum Chirstmas tree code is using named functions instead of anonymous functions.
- One more best practise around callbacks is return your callbacks.

### Promises
- Promises extract the callback function.
- Have a look at a simple asynchronous method and how it leads to classic Christmas tree code in app.js and promise.html.
- Now have a look at realPromise.html and promise.js. Promises are not natively available in Browsers.  You need to go to include  https://www.promisejs.org/polyfills/promise-7.0.4.min.js in order for promises to work.
- In your async method you can return a promise.
- A promise takes function as an argument. This function can take two parameters (fulfill and reject). Fulfill means our function worked. Reject means it didn't.
- What the promise has done is taken the callback and pulled it out of parameter.
- That is what promise essentially achieves, it makes our functions thennable.
- By using named functions instead of anonymous functions, you can have a better looking code. (less Christmas tree).
- To take the code to next level, you can basically return promises from your functions. 
- All this is described in promise.js and realPromise.html.

### ES6 and Babel
- ES6 has some really cool stuff but not all browsers support the syntax. There is still a way around using Es6 still in older browsers.
- npm install -g babel-cli
- npm install --save-dev  babel-preset-es2015
- babel es6.js -o es6converted.js (Use this command to convert your es6 code to code consumable by older es5 browsers).
- es6.js shows how we can use es6 features like let for older browsers as well.

We need a way to avoid this megaunit of tools and technologies and frameworks. Tools are for solving problems, not making them. We will soon start seeing simplification in Javascript development. Keep it simple

### Javascript Best practises section ends here. Below there are general notes on Javascript


#### Javascript Cool Things
- http://matthew.wagerfield.com/parallax/
- http://threejs.org/
- https://www.leapmotion.com/
- Javascript prompt takes input as alert.

#### Javascript primitive data types
- String
- Number
- Boolean
- Null
- Undefined

#### Javascript object creation
- Look at constructor.js
- Setting enumerable:false makes the key non iterable and does not show it in Object keys.
- If configurable is false for a property, you can't change enumerable attribute, can't set again configurable to true and can't delete it.

#### Javascript Prototypes and inheritance
- Functions have prototype property which is nothing but an empty object.
- An object literal does not have a prototype property.
- Although it does have a __proto__ property.
- A function's prototype is the object instance that will become prototype for all objects created using this function as a constructor.
- An Object's prototype is the object instance from which the object is inherited.
- A prototype is not like a class. It is an object.
- If a function X is created, a prototype object is created and attached to it behind the scenes.
- If X function is used as a constructor function with a new keyword, the object that is created, it's __proto__ property points to same as function's prototype.
- Refer to prototype.js for detailed examples.
- When we want to ask Javascript for a property value of an object, it looks first if object has the property and gets it's value, otherwise it looks for the property in it's prototype object. Refer to protoInherit.js for detailed examples.

#### Changing prototypes
- Have a look at changing prototypes file changeProtoType.js to understand the statements below. 
- Let's see what really happenned. Initially the Cat function and 2 instances of Cat, all are pointing to same prototype instance (say A) in memory. 
- When we change the prototype of our function, what we really did was create a new Object (B) in memory and change the function's prototype property to point to that new Object (B). 
- However the existing 2 instances (fluffy and muffin) point to same older prototype object (A).
- When we created new snowBell Cat, it created a new Object and set it's instance to point to current prototype of our function (B)

#### Creating prototype Chains
- Have a look at multilevelInherit.js in order to see how multi level inheritance works and how to create prototype chains.
