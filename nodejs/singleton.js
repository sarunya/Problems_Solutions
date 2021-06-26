class privateClass {
  constructor() {
    console.log("Private class created")
  }
}

class SingletonPrivateClass {
  constructor(){
    this.privateClass = null;
  }
  static instantiate() {
    if(this.privateClass)
  }
}

new Singleton();
new Singleton();
new Singleton();
new Singleton();


