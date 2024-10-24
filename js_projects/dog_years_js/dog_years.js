//Make a variable to hold my age
let myAge = 21;
//Make a variable for the number of early years
let earlyYears = 2;
//Multiply this by the ratio for early years
earlyYears = 10.5 * earlyYears;
//Make a variable for the number of later years
let laterYears = myAge - 2;
//Multiply this by the ratio for later years
laterYears *= 4;
//Check so far
console.log(earlyYears, laterYears);
//Add the two together
let myAgeInDogYears = earlyYears + laterYears;
//Make a variable for my name in lower case
let myName = 'Daniel'.toLowerCase();
//Print the results to console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);