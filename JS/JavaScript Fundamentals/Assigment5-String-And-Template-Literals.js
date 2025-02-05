// 1. Recreate the description variable from the last assignment, this time using the template literal syntax.

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
