"use strict";
/*
///////////////////////////////////////
// Activating Strict Mode
//////////////////////////////////////
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "audio";
// const private = 534;

///////////////////////////////////////
// FUNCTIONS
//////////////////////////////////////

function logger() {
  console.log("my name is steven");
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
	//juice is not defined outside of the function
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

///////////////////////////////////////
// FUNCTION DECLARATIONS VS EXPRESSIONS
//////////////////////////////////////

//function declaration

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

///////////////////////////////////////
// ARROW FUNCTION
//////////////////////////////////////

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
	const retirement = 65 - age;
	// return retirement;
	return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Steven"));
console.log(yearsUntilRetirement(1980, "Bob"));
///////////////////////////////////////
// FUNCTIONS CALLING OTHER FUNCTIONS
//////////////////////////////////////

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
  
	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
	//juice is not defined outside of the function
	return juice;
}

console.log(fruitProcessor(2, 3));
///////////////////////////////////////
// REVIEWING FUNCTIONS
//////////////////////////////////////

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
	const retirement = 65 - age;
  
	if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
		return retirement;
	} else {
    console.log(`${firstName} has already retired`);
		return -1;
	}
  
	// return ;
};

console.log(yearsUntilRetirement(1991, "Steven"));
console.log(yearsUntilRetirement(1950, "Mike"));

///////////////////////////////////////
// Challenge 1
//////////////////////////////////////

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
	} else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}`);
	} else console.log("No one wins");
}

checkWinner(avgDolphins, avgKoalas);
checkWinner(avgDolphins2, avgKoalas2);

/////////////////////////////////////////////////////////////////////////////
// ARRAYS
////////////////////////////////////////////////////////////////////////////

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); //quick way to get last value in an array

friends[2] = "Jay";
console.log(friends[2]);
// friends = ["bob", "ellis"];

const firstName = "Steven";
const steven = [firstName, "Mendez", 2037 - 1993, "teacher", friends];

console.log(steven);

//exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[years.length - 1]),
];
console.log(ages);
*/
/////////////////////////////////////////////////////////////////////////////
// ARRAYS
////////////////////////////////////////////////////////////////////////////

//adds elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay"); // push method returns length of array
console.log(friends, newLength);
friends.unshift("John");
console.log(friends);
// remove elements
const popped = friends.pop(); //returns popped element
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);
friends.push(23);
console.log(friends.indexOf("Steven"));
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
	console.log("you have a freind named peter");
}
