// function passed as an argument is called
// a callback function

const myFun = (callbackFun) => {
    let value = 10;
    callbackFun(value);
};

myFun(function(value){
    console.log(value);
});