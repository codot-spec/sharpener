class MyClass {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  printDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`City: ${this.city}`);
  }
}

// Create an instance of the class
const myInstance = new MyClass("John Doe", 30, "New York");

// Print the constructor elements
myInstance.printDetails();
