// 1. Declare a variable numNeighbours based on a prompt input
// like this:
// 2. If there is only 1 neighbour, log to the console 'Only 1
// border!' (use loose equality == for now).
// 3. Use an else-if block to log 'More than 1 border' in case
// numNeighbours is greater than 1.
// 4. Use an else block to log 'No borders' (this block will be
//  executed when numNeighbours is 0 or any other value).
// 5. Test the code with different values of numNeighbours,
//  including 1 and 0.
// 6. Change == to ===, and test the code again, with the same
// values of numNeighbours. Notice what happens when there is
//  exactly 1 border! Why is this happening?
// 7. Finally, convert numNeighbours to a number, and watch what
//  happens now when you input 1.
// 8. Reflect on why we should use the === operator and type
// conversion in this situation.

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
