// If your country's population is greater than
// 33 million, use the ternary operator to log a
// string like this to the console: "Portugal's population
// is above average". Otherwise, simply log "Portugal's
//  population is below average". Notice how only one word
// change between these two sentences!

// After checking the result, change the population temporarily to
//  13 and then to 130. See the different results, and set the
// population back to original.
const country = "Ukraine";
const continent = "Europe";
let population = 38_507_467;
const isIsland = false;
const language = "ukrainian";

population > 33_000_000
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);
