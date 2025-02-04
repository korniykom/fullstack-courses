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

const numberOnNeighbours = 7;

if (numberOnNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numberOnNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders");
}
