var Foo = /** @class */ (function () {
    function Foo() {
    }
    Object.defineProperty(Foo.prototype, "count", {
        get: function () {
            return Foo.count;
        },
        enumerable: false,
        configurable: true
    });
    Foo.count = 0;
    (function () {
        try {
            console.log(Foo.count);
        }
        catch (_a) { }
    })();
    return Foo;
}());
