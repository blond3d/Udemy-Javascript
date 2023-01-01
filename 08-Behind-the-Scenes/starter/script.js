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

var me = 'Steven';
let job = 'teacher';
const year = 1991;

//functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var X = 1;
let y = 2;
const z = 3;
