console.log('*************+++++++------inside hoisting.js now------+++++++*************')

// function call before function declaration 
// default value if not given the argument
// it works because only functions declarations are hoisted

greet();
function greet(name= 'man!'){
    console.log(`Welcome ${name}`);
}

// function call before function declaration when function is
// defined as an expression 
// it doesn't works because functions expressions are not hoisted

// speak();

const speak = function(name= 'woman!'){
    console.log(`Hello ${name}`);
  };
  
//   var foo;
  console.log(fool); // Uncaught ReferenceError: foo is not defined
  var fool = 'foo'; 
  console.log(fool); 

  function foo(_var){
    if(_var){
        let message = `var is not null -> ${_var}`;
        console.log(message)
    }
  }
  foo();

  let fooli;
  const bar = null;
  console.log(typeof undefined == typeof null)