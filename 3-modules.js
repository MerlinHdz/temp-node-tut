// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)
const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavor.js')
require('./7-mind-grenade.js') // runs function call in file
// console.log(names);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

// console.log(data);
// console.log(data.items[0], data.items[1]);
console.log(data.singlePerson.name);