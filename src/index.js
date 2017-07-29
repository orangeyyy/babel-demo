const obj = {
  name: 'orangeyyy'
};

const obj2 = {
  ...obj,
  age: 18
};

console.log(`${obj2.name}:${obj2.age}`);
