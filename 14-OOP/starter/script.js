'use strict';

///////////////////////////////////
//Constructor functions and the new operator
//////////////////////////////////

const Person = function (firstName, birthYear) {
  //Instance property
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never create method inside constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);

console.log(jonas);
//1. New { } is created
//2. function is called, this = {}
//3.{} is linked to prototype
//4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);
console.log(jonas instanceof Person);

///////////////////////////////////
//Prototypes
///////////////////////////////////
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

///////////////////////////////////
//Prototypal inheritance on built in objects
///////////////////////////////////

// console.log(jonas.__proto__);
//Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 5, 4, 7, 9, 9]; //new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

///////////////////////////////////
//Challenge 1
///////////////////////////////////
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed + 'km/h';
};

Car.prototype.accelerate = function () {
  const speedNum = parseInt(this.speed) + 10;
  this.speed = `${speedNum}km/h`;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  const speedNum = parseInt(this.speed) - 5;
  this.speed = `${speedNum}km/h`;
  console.log(this.speed);
};

const bmw = new Car('bmw', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
mercedes.accelerate();
bmw.brake();
mercedes.brake();
mercedes.brake();
*/

///////////////////////////////////
//ES6 Classes
///////////////////////////////////

//class expression
// const PersonCl = class{}

//Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

//1. Classes are NOT hoisted
//2.Classes are first class citizens
//3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

///////////////////////////////////
//Setters and getters
///////////////////////////////////

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
