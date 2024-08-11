console.log('*************+++++++------inside hoisting.js now------+++++++*************')

// function call before function declaration 
// default value if not given the argument
// it works

greet();
function greet(name= 'man!'){
    console.log(`Welcome ${name}`);
}

// function call before function declaration when function is
// defined as an expression 
// it doesn't works

// speak();

const speak = function(name= 'woman!'){
    console.log(`Hello ${name}`);
  };
  
  var foo;
  console.log(foo); // Uncaught ReferenceError: foo is not defined
  foo = 'foo'; 
  console.log(foo); 