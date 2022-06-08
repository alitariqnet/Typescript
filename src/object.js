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
    }

};

console.log(user);
user.login();
console.log(user.name);
console.log(user['age']);

// user['age'] = 25;
// console.log(user['age']);
user.logout();