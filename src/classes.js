// Constructors
// The power of prototypes is that we can reuse a set of properties if they should be present on every instance — especially for methods. Suppose we are to create a series of boxes, where each box is an object that contains a value which can be accessed through a getValue function. A naive implementation would be:


const _boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
console.log(`_boxes -> ${_boxes}`)
// This is subpar, because each instance has its own function property that does the same thing, which is redundant and unnecessary. Instead, we can move getValue to the [[Prototype]] of all boxes:


const boxPrototype = {
  getValue() {
    return this.value;
  },
};

const boxes_ = [
  { value: 1, __proto__: boxPrototype },
  { value: 2, __proto__: boxPrototype },
  { value: 3, __proto__: boxPrototype },
];
console.log(`boxes_ -> ${boxes_}`)

// This way, all boxes' getValue method will refer to the same function, lowering memory usage. However, manually binding the __proto__ for every object creation is still very inconvenient. This is when we would use a constructor function, which automatically sets the [[Prototype]] for every object manufactured. Constructors are functions called with new.


// A constructor function
function Box_(value) {
  this.value = value;
}

// Properties all boxes created from the Box() constructor
// will have
Box_.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box_(1), new Box_(2), new Box_(3)];
console.log(boxes)
// We say that new Box(1) is an instance created from the Box constructor function. Box.prototype is not much different from the boxPrototype object we created previously — it's just a plain object. Every instance created from a constructor function will automatically have the constructor's prototype property as its [[Prototype]] — that is, Object.getPrototypeOf(new Box()) === Box.prototype. Constructor.prototype by default has one own property: constructor, which references the constructor function itself — that is, Box.prototype.constructor === Box. This allows one to access the original constructor from any instance.

// Note: If a non-primitive is returned from the constructor function, that value will become the result of the new expression. In this case the [[Prototype]] may not be correctly bound — but this should not happen much in practice.

// The above constructor function can be rewritten in classes as:


class Box {
  constructor(value) {
    this.value = value;
  }

  // Methods are created on Box.prototype
  getValue() {
    return this.value;
  }
}
// Classes are syntax sugar over constructor functions, which means you can still manipulate Box.prototype to change the behavior of all instances. However, because classes are designed to be an abstraction over the underlying prototype mechanism, we will use the more-lightweight constructor function syntax for this tutorial to fully demonstrate how prototypes work.

// Because Box.prototype references the same object as the [[Prototype]] of all instances, we can change the behavior of all instances by mutating Box.prototype.


function _Box(value) {
  this.value = value;
}
_Box.prototype.getValue = function () {
  return this.value;
};
const box = new Box(1);
console.log(box)
// Mutate Box.prototype after an instance has already been created
_Box.prototype.getValue = function () {
  return this.value + 1;
};
console.log(box.getValue()); // 2