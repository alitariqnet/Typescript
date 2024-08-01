var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
console.log("ID:", id);
var pName = "Ali";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
var any = [1, 'hello', true];
var s = 'pepeLaugh';
s = 10;
console.log('s:', s);
var Person = /** @class */ (function () {
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Person.prototype.register = function () {
        return '${this.name} is registered';
    };
    return Person;
}());
var brad = new Person(1, 'Brad Traversy', 30);
var ali = new Person(2, 'Ali Tariq', 38);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(position, id, name, age) {
        var _this = _super.call(this, id, name, age) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee('developer', 4, 'Shawn', 28);
function logPoint(point) {
    console.log("x = " + point.x + ", y = " + point.y);
}
function logName(x) {
    console.log("Hello, " + x.name);
}
var obj = {
    x: 0,
    y: 0,
    name: "Origin",
};
logPoint(obj);
logName(obj);
function retArray(arr) {
    return [1, 2, 3];
}
var Car = /** @class */ (function () {
    function Car() {
        this.wheels = 4;
    }
    Car.prototype.drive = function () {
        console.log('the car is driving');
    };
    return Car;
}());
var myCar = new Car();
console.log(myCar.drive());
