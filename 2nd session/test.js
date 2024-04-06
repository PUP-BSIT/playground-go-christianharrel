class Person {
    constructor(name = "John Doe", email = "test@sample.com") {
      this.name = name;
      this.email = email;
      console.log("Person object is created");
    }
  
    printName() {
      console.log(this.name);
    }
  }
  
  const person1 = new Person();
  person1.printName();
  
  const person2 = new Person("Alice");
  person2.printName();
  
  console.log(person1 === person2);
  
  function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
  }
  
  function PersonWithLogger(name) {
    console.log(`${name} is created.`);
  }
  
  Logger(PersonWithLogger);
  const person3 = new PersonWithLogger("John Doe");
  const person4 = new PersonWithLogger("Jane Dee");
  