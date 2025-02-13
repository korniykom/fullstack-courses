// Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

// Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

const myCountry = {
  country: "Ukraine",
  capital: "Kyiv",
  language: "ukrainian",
  population: 37_000_000,
  neightbours: [
    "Poland",
    "Slovakia",
    "Hungary",
    "Romania",
    "Moldova",
    "Russia",
    "Belarus",
  ],
};

myCountry.population += 2;
myCountry["population"] -= 1;

console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neightbours.length} neighbouring countires and a capital called ${myCountry.capital}`
);
