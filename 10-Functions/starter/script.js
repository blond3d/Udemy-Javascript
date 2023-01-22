'use strict';

//Default Parameters
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 100) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);


//Value vs Reference

const flight = 'LH234';
const jonas = {
  name: 'jonas schmedtmann',
  passport: 2323323232323,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2323323232323) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//Is the same as doing
//flightNum = flight
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(jonas);
checkIn(flight, jonas);


/////////////////////////////////
// Functions accepting callback functions
////////////////////////////////

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best', oneWord);

//JS uses callback functions all the time
const high5 = function () {
  console.log('High 5');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


/////////////////////////////////
// Functions returning functions
////////////////////////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHello = greet('Hello how are you');

greeterHello('Steven');
greeterHello('Joe');

greet('Hello')('Jonas');

//Challenge

//My way
const greetArrow = greeting =>
  function (name) {
    return console.log(`${greeting} ${name}`);
  };

//Jonas way
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hello arrow')('Steven');
greetArr('Hi')('Joe');
*/

/////////////////////////////////
// The call and apply method
////////////////////////////////

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //OLD way book: function()
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(182, 'Steven Mendez');
console.log(lufthansa);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//DOes not work
// book(23, 'Smash Williams');

//Call method
book.call(euroWings, 23, 'Smash Williams');
console.log(euroWings);

book.call(lufthansa, 239, 'Mary Magdalen');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 582, 'Mary Magdalen');

//Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

/////////////////////////////////
// The bind method
////////////////////////////////
