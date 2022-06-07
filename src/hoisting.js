
// function call before function declaration 
greet('Ali');
// it works
function greet(name= 'man!'){
    console.log(`Welcome ${name}`);
}
// function call before function declaration when function is
// defined as an expression 
speak('Ali');
// it doesn't works
const speak = function(name){
    console.log(`Hello ${name}`);
  };
  
