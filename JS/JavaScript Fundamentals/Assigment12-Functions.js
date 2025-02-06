//1. Write a function called describeCountry which takes three parameters: country,
//  population and capitalCity. Based on this input, the function returns a string
// with this format: 'Finland has 6 million people and its capital city is Helsinki'.

//2. Call this function 3 times, with input data for 3 different countries. Store
// the returned values in 3 different variables, and log them to the console.

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}\n`;
}

const description1 = describeCountry("Finland", 6_000_000, "Helsinki");
const description2 = describeCountry("Germany", 83_000_000, "Berlin");
const description3 = describeCountry("Portugal", 10_000_000, "Lisbon");

console.log(description1, description2, description3);
