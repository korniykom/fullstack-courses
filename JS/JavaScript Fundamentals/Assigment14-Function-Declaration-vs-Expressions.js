// 1. The world population is 7900 million people. Create a function declaration called
// percentageOfWorld1 which receives a population value, and returns the percentage of the
//  world population that the given population represents. For example, China has 1441
// million people, so it's about 18.2% of the world population.

// 2. To calculate the percentage, divide the given population value by 7900 and then
// multiply by 100.

// 3. Call percentageOfWorld1 for 3 populations of countries of your choice, store the
// results into variables, and log them to the console.

// 4. Create a function expression which does the exact same thing, called
// percentageOfWolrd2, and also call it with 3 country populations (can be the same
// populations).

function percentageOfWorld1(population) {
  return (7900 / population) * 100;
}

const percentageOfWolrd2 = function (population) {
  return (7900 / population) * 100;
};

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

console.log(percPortugal1, percChina1, percUSA1);

const percPortugal2 = percentageOfWorld1(10);
const percChina2 = percentageOfWorld1(1441);
const percUSA2 = percentageOfWorld1(332);

console.log(percPortugal2, percChina2, percUSA2);
