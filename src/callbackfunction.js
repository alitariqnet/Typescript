// function passed as an argument is called
// a callback function

const myFun = (callbackFun) => {
    let value = 10;
    callbackFun(value);
};

myFun(function(value){
    console.log(value);
});

// myFun(value => console.log(value));
/****************************/

let people = ['umar','ali','hassan'];
// forEach() method expects a callback function
// as an argument
// people.forEach(person => console.log(person));
// people.forEach((person, index)=> console.log(index, person));

const logPerson = (person, index) => {
    console.log(`${index} - ${person}`);
}

people.forEach(logPerson);