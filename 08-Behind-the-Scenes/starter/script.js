'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   function printAge() {
//     const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millennial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Steven';
// calcAge(1993);

//variable
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Steven';
// let job = 'teacher';
// const year = 1991;

// //functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// //example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var X = 1;
// let y = 2;
// const z = 3;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();
/*
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year > +1981 && self.year <= 1996);
    //   // console.log(this.year > +1981 && this.year <= 1996);
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 1, 3, 7, 6);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 4, 5);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
const me = {
  name: 'Steven',
  age: 30,
};
const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me);
*/

//Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

//Reference types
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('before', jessica);
console.log('after', marriedJessica);

// marriedJessica = {};

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('before', jessica2);
console.log('after', jessicaCopy);
