'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var obj = {
  name: 'orangeyyy'
};

var obj2 = _extends({}, obj, {
  age: 18
});

console.log(obj2.name + ':' + obj2.age);
