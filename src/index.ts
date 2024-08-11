let id: number = 50

console.log("ID:",id)

const pName: string = "Ali"

interface User {
    name: string;
    id: number;
  }
   
  class UserAccount implements User{
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    } 
  }
   
  const user: User = new UserAccount("Murphy", 1);

  const any: any = [1,'hello',true]

  let s: any = 'smile'

  s = 10
  console.log('s:',s)



  interface PersonInterface {
      id: number
      name: string
      register() : string
  }

  class Person implements PersonInterface {

    id: number;
    name: string;
    age: number;
    
    constructor(id: number, name:string, age:number){
        this.id = id
        this.name = name
        this.age = age
    }
      
    register(){
        return '${this.name} is registered'
    }
  }

  let brad = new Person(1,'Brad Traversy',30)
  let ali = new Person(2,'Ali Tariq',38)

  class Employee extends Person{
      position: string;

      constructor(position: string, id: number, name:string, age:number){
          super(id,name,age)
          this.position=position
      }
      
  }

  let emp = new Employee ('developer',4,'Shawn',28)

  interface Pointlike {
    x: number;
    y: number;
  }
  interface Named {
    name: string;
  }
   
  function logPoint(point: Pointlike) {
    console.log("x = " + point.x + ", y = " + point.y);
  }
   
  function logName(x: Named) {
    console.log("Hello, " + x.name);
  }
   
  const obj = {
    x: 0,
    y: 0,
    name: "Origin",
  };
   
  logPoint(obj);
  logName(obj);


  function retArray(arr: any[]): any[] {
    return [1,2,3]
  }

  class Car {
    wheels: number = 4

    drive(){
        console.log('the car is running')
    }
}
let myCar: Car = new Car()
console.log(myCar.drive())


console.log('changes')

// lets practice any type

let a: any = 0

console.log(a)

a = 'something'

console.log(a)

let arrayOfAnyType: any[] = ['name',true,1,'c']

console.log(arrayOfAnyType)

class Base {
  greet() {
    console.log("Hello, world!");
  }
}
 
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
 
const d = new Derived();
d.greet();
d.greet("reader");