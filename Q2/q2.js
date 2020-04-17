// JavaScript Document

//Create a class Person and inside the class create one constructor and gives the parameter
class Person {
  constructor(name, age, gender, interests) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  //This is a greeting function when we write in console greeting.Person it gives the 'Hi i am the '+person name''
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

  //And this bye function work like as the greeting function
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

// instantiate new parth objects instances
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);

// instantiate new parth objects instances
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);


// create a subclasses for Teacher that inherits from Person
//This teacher class use the person parameter
class Teacher extends Person {
  //create a one constructor and gives new parameter
  constructor(name, last, age, gender, interests, subject, grade) {
    //The super keyword use to access the class person constructor parameters and use it inside the teacher class
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.last = last;
    this.subject = subject;
    this.grade = grade;
  };
}
// instantiate new Jay objects instances
let Jay = new Teacher('Jay','Patel',19,'male',['cricket,games'],'JavaScript',90);
