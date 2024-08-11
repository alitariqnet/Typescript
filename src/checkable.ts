interface Checkable {
    check(name: string): boolean;
  }
   
  class NameChecker implements Checkable {
    check(s: string):any {
  
      // Notice no error here
      return s.toLowerCase() === "ok";
    }
  }

