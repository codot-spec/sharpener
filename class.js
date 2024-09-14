class MyClass {
  constructor(name, age, city,email) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.email=email;
  }

  printDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`City: ${this.city}`);
    console.log(`email: ${this.email}`);
  }
}

// Create an instance of the class
const myInstance = new MyClass("John Doe", 30, "New York", "ab@g.com");
const myInstance2 = new MyClass("Jane Doe", 30, "California", "de@g.com");
// Print the constructor elements
myInstance.printDetails();
myInstance2.printDetails();
//Updated version
//Final copy
