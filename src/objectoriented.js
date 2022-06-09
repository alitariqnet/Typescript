class Vehicle{

}

class Car extends Vehicle{
    constuctor(model=`1990`,speed=`100mph`,wheels=4){
        this.model = model;
        this.speed = speed;
        this.wheel = wheel;
    }

}

let myCar = new Car(`1983`,`100mph`,4);

console.log(myCar.model);

console.log(window.Document.length);