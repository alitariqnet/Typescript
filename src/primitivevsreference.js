// primitive types vs reference types

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne ${scoreOne}`);
console.log(`scoreTwo ${scoreTwo}`);

scoreOne=100;
scoreTwo+=25;

console.log(`scoreOne ${scoreOne}`);
console.log(`scoreTwo ${scoreTwo}`);

let obj1 = {name:'Ali', score: 50};
let obj2 = obj1;

console.log(`obj1 ${obj1.score}`);
console.log(`obj2 ${obj2.score}`);

obj2.score = 100;

console.log(`obj1 ${obj1.score}`);
console.log(`obj2 ${obj2.score}`);


