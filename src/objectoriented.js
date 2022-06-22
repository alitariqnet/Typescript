console.log('inside objectoriented.js')

class Vehicle{
    wheels = 4;
}

class Car extends Vehicle{
    constuctor(model=`1990`,speed=`100mph`){
        this.model = model;
        this.speed = speed;
    }

}

let myCar = new Car('1983',`100mph`);

console.log(myCar);