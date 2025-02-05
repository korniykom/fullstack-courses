// 1. If your country split in half, and each half would contain
//  half the population, then how many people would live in each
// half?

// 2. Increase the population of your country by 1 and log the
// result to the console.

// 3. Finland has a population of 6 million. Does your country
//  have more people than Finland?

// 4. The average population of a country is 33 million people.
// Does you country have less people than the average country?

// 5. Based on the variables you created, create a new variable
// description which contains a string with this format:
// 'Portugal is in Europe, and its 11 million people speak
//  portuguese'.

const country = "Ukraine";
const continent = "Europe";
let population = 38_507_467;
const isIsland = false;
const language = "ukrainian";

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof language);
console.log(typeof isIsland);

console.log(population / 2);
console.log(++population);
console.log(6_000_000 > population);
console.log(33_000_000 > population);

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;

console.log(description);
