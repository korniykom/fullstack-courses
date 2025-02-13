// Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// Call the describe method.

// Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

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

myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neightbours.length} neighbouring countires and a capital called ${this.capital}`
  );
};

myCountry.describe();
