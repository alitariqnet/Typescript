console.log('inside object.js now');
let user = 
{
    name: 'Ali',
    age: 30,
    email: 'alibaba420pk@yahoo.com',
    location: 'Lahore',
    blogs: ['learn Javascript in a weekend','easy learn modern Javascript'],
    login: function(){
        console.log(`${this.name} logged in`);
    },
    logout: function(){
        console.log(`${this.name} logged out`);
    },
    aging: function(){
        // call this funtion on every birthday
        this.age++;
        return this;
    }

};

console.log(user);
user.aging().aging().aging();
console.log(user.name);
console.log(user['age']);

// user['age'] = 25;
// console.log(user['age']);
user.logout();

// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.exp(2));
console.log(Math.round(Math.exp(2)));
// console log random number between 0 and 10
console.log(Math.round(Math.random()*10));


// Arrays
const newArray = [1,2,5,4,1,2,3,5,4,6,2,1,3,5,2,13,30];
// .filter() vs .find()
console.log(newArray.filter(number => number==1));
console.log(newArray.find(number => number==1));
// map()
console.log(newArray.map(number => number/2));
console.log(newArray.reduce(number => number<10));
// reduce()
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(`sumWithInitial: ${sumWithInitial}`);
// expected output: 10

// push() and pop()
// console.log(newArray);
console.log(newArray.pop());
// console.log(newArray);
console.log(newArray.push(40));
// console.log(newArray);
console.log(newArray.push(newArray.pop()));
// console.log(newArray);

// shift() method
const array2 = [1, 2, 3];

const firstElement = array2.shift();

console.log(array2);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

// slice() method
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// JavaScript Demo: Array.some()
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

// REST arguments JS