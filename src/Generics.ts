
// Generic
class Anything<Type> {
    
    // field
    _contents: Type;

    // constructor
    constructor(value: Type) {
      this._contents = value;
    }

    // getter
    get contents(){
        return this._contents;
    }

    // setter
    set contents(contents){
        this._contents = contents;
    }
  }

  // string
  const b = new Anything("hello!");

  // number
  const n = new Anything(10);
  
  // boolean
  const tf = new Anything(true);

 console.log(b._contents)
 console.log(n._contents)
 console.log(tf._contents)