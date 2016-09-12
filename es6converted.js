'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log('And we can access i from outside like' + i);
console.log(typeof i === 'undefined' ? 'undefined' : _typeof(i));

for (var _j = 0; _j < 10; _j++) {
    console.log(_j);
}

console.log(typeof j === 'undefined' ? 'undefined' : _typeof(j));
console.log('Can I access js from outside like' + j);
