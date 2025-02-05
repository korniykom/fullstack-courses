// 1. If your country's population is greater than 33 million, log
// a string like this to the console: "Portugal's population is
// 22 million below average" (the 22 is the average of 33 minus
//  the country's population).

// 2. After checking the result, change the population temporarily
//  to 13 and then to 130. See the different results, and set the
// population back to original.

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

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

if (population > 33_000_000) {
  console.log(
    `${country}'s population is ${population - 33_000_000} above average`
  );
}
