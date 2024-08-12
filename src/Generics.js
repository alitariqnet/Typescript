// Generic
var Anything = /** @class */ (function () {
    // constructor
    function Anything(value) {
        this._contents = value;
    }
    Object.defineProperty(Anything.prototype, "contents", {
        // getter
        get: function () {
            return this._contents;
        },
        // setter
        set: function (contents) {
            this._contents = contents;
        },
        enumerable: false,
        configurable: true
    });
    return Anything;
}());
// string
var b = new Anything("hello!");
// number
var n = new Anything(10);
// boolean
var tf = new Anything(true);
console.log(b._contents);
console.log(n._contents);
console.log(tf._contents);
