const babel = require('babel-core');

console.log(babel.transform('const func = (item) => item + 1;'));