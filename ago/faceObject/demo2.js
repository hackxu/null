/**
 * Created by bluexu on 16/2/3.
 */
var Person = function (firstName) {
    this.firstName = firstName;
}

Person.prototype.walk = function () {
    console.log('I am walking');
};
Person.prototype.sayHello = function () {
    console.log("Hello,I'm " + this.firstName);
};

var Student = function (firstName, subject) {
    Person.call(this, firstName);
    this.subject = subject;
}

//Student.prototype = Object.create(Person.prototype);
//Student.prototype.constructor = Student;

Student.prototype.sayHello= function () {
    console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
}

Student.prototype.sayGoodBye = function () {
    console.log("GoodBye!")
}

var person1 = new Person("one");
console.log(person1)
var student = new Student("one")
console.log(student)