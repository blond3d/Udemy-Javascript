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
  console.log("you have a friend named peter");
}

/////////////////////////////////////////////////////////////////////////////
// Challenge 2
////////////////////////////////////////////////////////////////////////////
// Test data: 125, 555 and 44

function tip(bill) {
  if (50 <= bill && bill <= 300) {
    return bill * 0.15;
	} else {
    return bill * 0.2;
	}
}
let bills = [125, 555, 44];

let tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])];
console.log(tips);

let total = [
  tip(bills[0]) + bills[0],
	tip(bills[1]) + bills[1],
	tip(bills[2]) + bills[2],
];

console.log(total);

/////////////////////////////////////////////////////////////////////////////
// Objects
////////////////////////////////////////////////////////////////////////////
const steven = {
  firstName: "steven",
	lastName: "mendez",
	age: 2037 - 1993,
	job: "teacher",
	friends: ["michael", "Peter", "Steven"],
};

console.log(steven.lastName);


/////////////////////////////////////////////////////////////////////////////
// Dot vs object notation
////////////////////////////////////////////////////////////////////////////

const steven = {
  firstName: "steven",
	lastName: "mendez",
	age: 2037 - 1993,
	job: "teacher",
	friends: ["michael", "Peter", "Steven"],
};

console.log(steven);
console.log(steven.lastName);
console.log(steven["lastName"]);

const nameKey = "Name";
console.log(steven["first" + nameKey]);
console.log(steven["last" + nameKey]);

// console.log(steven.'last' + nameKey)

const interestIn = prompt(
  "What do you want to know about Steven?, Choose between firstName, lastName, age, job, friends"
  );
  
  if (steven[interestIn]) {
    console.log(steven[interestIn]);
  } else {
    console.log(
      "Wrong request. Choose between firstName, lastName, age, job, friends"
      );
    }
    
    steven.location = "USA";
    steven["twitter"] = "@urpalsteven";
    console.log(steven);
    
    // Challenge; Jonas has 3 friends and his best friend is called michael
    
    console.log(
      `${steven.firstName} has ${steven.friends.length} friends, and his best friends is called ${steven.friends[0]}`
      );
      
      const steven = {
        firstName: "steven",
        lastName: "mendez",
        birthYear: 1993,
        job: "teacher",
        friends: ["michael", "Peter", "Steven"],
        hasDriversLicense: true,
        
        // calcAge: function (birthYear) {
          // 	return 2037 - birthYear;
          // },
          // calcAge: function () {
            // 	console.log(this);
            // 	return 2037 - this.birthYear;
            // },
            calcAge: function () {
              this.age = 2037 - this.birthYear;
              return this.age;
            },
            getSummary: function () {
              return `${this.firstName} is a ${this.calcAge()}-year old ${
                this.job
              }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
            },
          };
          
          console.log(steven.calcAge());
          console.log(steven.age);
          
          //challenge
          console.log(steven.getSummary());
          


/////////////////////////////////////////////////////////////////////////////
// Challenge 3
////////////////////////////////////////////////////////////////////////////

let mark = {
	firstName: "Mark",
	lastName: "Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

let john = {
	firstName: "John",
	lastName: "Smith",
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

function compareBMI(markBMI, johnBMI) {
	if (markBMI > johnBMI) {
		console.log(
			`${mark.firstName} ${mark.lastName}'s BMI(${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi})`
		);
	} else {
		console.log(
			`${john.firstName} ${john.lastName} BMI(${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.bmi})`
		);
	}
}

compareBMI(mark.calcBMI(), john.calcBMI());


for (let rep = 1; rep <= 10; rep++) {
	console.log(`lifting weights repetition ${rep}`);
}

for (let rep = 10; rep >= 0; rep--) {
	console.log(`lifting weights repetition ${rep}`);
}
*/

const stevenArray = [
	"Steven",
	"Mendez",
	2037 - 1993,
	"teacher",
	["Michael", "Peter", "John"],
	true,
	"hello",
];

let types = [];

for (let i = 0; i < stevenArray.length; i++) {
	console.log(stevenArray[i], typeof stevenArray[i]);
	// types[i] = typeof stevenArray[i];
	types.push(typeof stevenArray[i]);
}

console.log(types);

let years = [1991, 2007, 1969, 2020];
let ages = [];
for (let i = 0; i < years.length; i++) {
	ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break
console.log("----only strings----");
for (let i = 0; i < stevenArray.length; i++) {
	if (typeof stevenArray[i] !== "string") continue;
	console.log(stevenArray[i], typeof stevenArray[i]);
}

console.log("---Break with number---");
for (let i = 0; i < stevenArray.length; i++) {
	if (typeof stevenArray[i] === "number") break;
	console.log(stevenArray[i], typeof stevenArray[i]);
}
