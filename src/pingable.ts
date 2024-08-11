interface Pingable {
    ping(): string;
  }
   
  class Sonar implements Pingable {

    ping() {
      return ("ping!");
    }
  }
   
  class Ball implements Pingable {

    ping() {
      return ("ping!");
    }
  }