//Assign a variable kelvin the value of 293
const kelvin = 0;
//Convert kelvin to celsius by subtracting 273
const celsius = kelvin - 273;
//Convert celsius to fahrenheit using the given formula
let fahrenheit = celsius * 9/5 + 32;
//Round this decimal down to an integer
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//Convert celsius to newton and round down
let newton = Math.floor(celsius * 33/100);
console.log(`The temperature is ${newton} degrees Newton.`);