/*let js = "amazing";
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Steven";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "programmer";
let myCurrentJob = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 12);
// console.log(typeof "Steven");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1993;
// birthYear = 1990;
// const job;
var job = "programmer";
job = "teacher";

lastName = "Mendez";
console.log(lastName);

//Math operators
const now = 2037;
const ageSteven = now - 1993;
const ageSam = now - 2020;
console.log(ageSteven, ageSam);

console.log(ageSteven * 2, ageSteven / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 - 2 * 2 * 2

const firstName = "Steven";
const lastName = "Mendez";
console.log(firstName + " " + lastName);
//assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10
x *= 4;
x++;
x--;
console.log(x);

//comparison operators
console.log(ageSteven > ageSam); // >, <, >=, <=
console.log(ageSam >= 18);
const isFullAge = ageSam >= 18;

console.log(now - 1991 > now - 2019);
const now = 2037;
const ageSteven = now - 1993;
const ageSam = now - 2020;

console.log(now - 1991 > now - 2019);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const ageAverage = (ageSteven + ageSam) / 2;
console.log(ageSteven, ageSam, ageAverage);


////////////////////////////////////////////////////////

CHALLENGE 1

///////////////////////////////////////////////////////
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// console.log(bmiMark, bmiJohn, markHigherBMI);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;
let bmiMark = markWeight / markHeight ** 2;
let bmiJohn = johnWeight / johnHeight ** 2;
let markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);

////////////////////////////////////////////////////////

// STRINGS AND TEMPLATE LITERALS

///////////////////////////////////////////////////////
const firstName = "Steven";
const job = "teacher";
const birthYear = "1993";
const year = 2037;
const steven =
"I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(steven);

const stevenNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `;
console.log(stevenNew);

console.log(`Just a regular string...`);

console.log("String with \n multiple \n lines");

console.log(`String
multiples
lines`);

const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
	console.log(`${yearsLeft} years left until driving license`);
}

const birthYear = 2021;

let century = "";
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

////////////////////////////////////////////////////////

// CHALLENGE 2

///////////////////////////////////////////////////////

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;
let bmiMark = markWeight / markHeight ** 2;
let bmiJohn = johnWeight / johnHeight ** 2;

if (bmiMark > bmiJohn) {
  console.log(`Mark has a higher bmi. BMI ${bmiMark}`);
} else {
  console.log(`John has a higher bmi. BMI ${bmiJohn}`);
}

////////////////////////////////////////////////////////

// Type conversion and coercion

///////////////////////////////////////////////////////

//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Steven"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
let n = "1" + 1;
n = n - 1;
console.log(n);

////////////////////////////////////////////////////////

// Truthy and falsy values

///////////////////////////////////////////////////////

//5 falsy values, 0,' ', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Steven"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("Yay height is defined");
} else console.log("Height is undefined");
////////////////////////////////////////////////////////

// equality operators == vs ===

///////////////////////////////////////////////////////

const age = "18";
if (age === 18) console.log("You just became an adult :D (Strict)");
if (age == 18) console.log("You just became an adult :D (loose) ");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool 23 is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 7 or 23");
}

if (favorite !== 23) {
  console.log("why not 23");
}

////////////////////////////////////////////////////////

// Logical Operator

///////////////////////////////////////////////////////

const hasDriversLicense = true; //a
const hasGoodVision = true; //b

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
  // 	console.log("Sarah is able to drive");
  // } else {
    // 	console.log("Someone else should drive");
    // }
    
    const isTired = false; //
    console.log(hasDriversLicense || hasGoodVision || isTired);
    
    if (hasDriversLicense && hasGoodVision && !isTired) {
      console.log("Sarah is able to drive");
    } else {
      console.log("Someone else should drive");
    }
    
    
    ////////////////////////////////////////////////////////
    
    // Challenge 3
    
    ///////////////////////////////////////////////////////
    
    const dolphinsScore = (97 + 112 + 101) / 3;
    const koalasScore = (109 + 95 + 123) / 3;
    
    console.log(dolphinsScore, koalasScore);
    
    if (dolphinsScore && koalasScore < 100) {
      console.log("Minimum score not met");
    } else if (dolphinsScore > koalasScore) {
      console.log(`Dolphins beat the koalas ${dolphinsScore} to ${koalasScore}`);
    } else if (dolphinsScore < koalasScore) {
      console.log(`Koalas beat the dolphins ${koalasScore} to ${dolphinsScore}`);
    } else if (dolphinsScore === koalasScore) {
      console.log(`Game is a tie. ${dolphinsScore} to ${koalasScore}`);
    }
    
    

const day = "friday";

switch (day) {
	case "monday": // day === monday
		console.log("Plan course structure");
		console.log("go to coding meetup");
		break;
	case "tuesday":
		console.log("prepare theory videos");
		break;
	case "wednesday":
	case "thursday":
		console.log("write code examples");
		break;
	case "friday":
		console.log("record videos");
		break;
	case "saturday":
	case "sunday":
		console.log("enjoy the weekend");
		break;
	default:
		console.log("not a valid day");
}

if (day === "monday") {
	console.log("Plan course structure");
	console.log("go to coding meetup");
} else if (day === "tuesday") {
	console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
	console.log("write code examples");
} else if (day === "friday") {
	console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
	console.log("enjoy the weekend");
} else {
	console.log("not a valid day");
}


////////////////////////////////////////////////////////

// conditional operator

///////////////////////////////////////////////////////

const age = 23;
age >= 18
	? console.log("I like to drink wine")
	: console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";

console.log(drink);

let drink2;
if (age >= 18) {
	drink2 = "wine";
} else {
	drink2 = "water";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/

////////////////////////////////////////////////////////

// challenge 4

///////////////////////////////////////////////////////
let bill = 275;
let tip = 50 <= bill >= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);
console.log(
	`the bill was ${bill}, the tip was ${tip}, and the total value was ${
		bill + tip
	}`
);
