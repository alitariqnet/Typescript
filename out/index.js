"use strict";
let id = 5;
console.log("ID:", id);
const pName = "Ali";
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("Murphy", 1);
const any = [1, 'hello', true];
let s = 'smile';
s = 10;
console.log('s:', s);
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return '${this.name} is registered';
    }
}
let brad = new Person(1, 'Brad Traversy', 30);
let ali = new Person(2, 'Ali Tariq', 38);
class Employee extends Person {
    constructor(position, id, name, age) {
        super(id, name, age);
        this.position = position;
    }
}
let emp = new Employee('developer', 4, 'Shawn', 28);
function logPoint(point) {
    console.log("x = " + point.x + ", y = " + point.y);
}
function logName(x) {
    console.log("Hello, " + x.name);
}
const obj = {
    x: 0,
    y: 0,
    name: "Origin",
};
logPoint(obj);
logName(obj);
function retArray(arr) {
    return [1, 2, 3];
}
class Car {
    constructor() {
        this.wheels = 4;
    }
    drive() {
        console.log('the car is running');
    }
}
let myCar = new Car();
console.log(myCar.drive());
console.log('changes');
// lets practice any type
let a = 0;
console.log(a);
a = 'something';
console.log(a);
let arrayOfAnyType = ['name', true, 1, 'c'];
console.log(arrayOfAnyType);
class Base {
    greet() {
        console.log("Hello, world!");
    }
}
class Derived extends Base {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const d = new Derived();
d.greet();
d.greet("reader");
