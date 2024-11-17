const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);

// This statement declares a function and calls it immediately a.k.a IiFE
(function foo(){
    console.log('foo with IIFE')
})();

// Above code is equivalent to the code below, also notice that there is not conflict with the above foo() here,
// when calling foo(), simply because that is not available here
function foo(){
    console.log('foo withOUT IIFE')
}
foo();

// foo with IIFE as argument, yes it works!
(function foo(message){
    console.log(message)
})('foo with IIFE as argument');