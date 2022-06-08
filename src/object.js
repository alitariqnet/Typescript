let user = 
{
    name: 'Ali',
    age: 30,
    email: 'alibaba420pk@yahoo.com',
    location: 'Lahore',
    blogs: ['learn Javascript in a weekend','easy learn modern Javascript'],
    login: function(){
        console.log(`${this.name} logged in`);
    },
    logout: function(){
        console.log(`${this.name} logged out`);
    },
    aging: function(){
        // call this funtion on every birthday
        this.age++;
        return this;
    }

};

console.log(user);
user.aging().aging().aging();
console.log(user.name);
console.log(user['age']);

// user['age'] = 25;
// console.log(user['age']);
user.logout();

// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.exp(2));
console.log(Math.round(Math.exp(2)));
// console log random number between 0 and 10
console.log(Math.round(Math.random()*10));