//this is for OOPS in JS
//To structure our code

//objects prototypes

// let arr = [1,2,3];

// arr.sayHello = () => {
//     console.log("Hello")
// };

//***************************************************************************************************** */

//Factory Function

// function PersonMaker(name, age) {
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`Hello my name is ${this.name} and I am ${this.age} years`)
//         }
//     }

//     return person;
// }

// let P1 = PersonMaker("aqsa" , 22); //creating copy there own so this is inefficient way
// let P2 = PersonMaker("sana" , 24);

//***************************************************************************************************** */

//constructors are special functions that does'nt return anything and start with capital latter
// New Operator

// this syntax is tricky so we can go for other way in which we done same work that syntax called classes

// function Person(name, age) {
//         this.name = name;
//         this.age = age;

//     }

//  Person.prototype.talk = function () {
//     console.log(`hi, my name is ${name} and i m ${age} years`)
//  }

//     let P1 = new Person("aqsa" , 22);
//     let P2 = new Person("sana" , 24);

//***************************************************************************************************** */

//classes

// class Person {
//   constructor(name, age) {
//     this.name = name;                                                                                                                                                                                                               
//     this.age = age;
//   }                                                                                     

//   talk() {
//     console.log(`hi, my name is ${name} and i m ${age} years`);
//   }
// }

// let P1 = new Person("aqsa", 22);
// let P2 = new Person("sana", 24);


/***************************************************************************************************** */

//Inheristance 


//parent class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`hi, my name is ${this.name} and i m ${this.age}`)
    }
}


//child class
class Student extends Person {
    constructor(name, age, marks) {
        super(name, age) //parent class constructor is being called
        this.marks = marks;
    }
   
}

//child class
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age) //parent class constructor is being called
        this.subject = subject;
    }
   
}

let Stu1 = new Student("aqsa", 22, 95);

//if we write any class in child and any function then the  child class Priority 1st.


//-------------------------------------------------------------------------