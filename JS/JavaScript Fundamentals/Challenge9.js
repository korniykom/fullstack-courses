// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
const dolphinsScore = [96, 108, 89];
const koalasScore = [88, 91, 110];

const dolphinsAverage =
  dolphinsScore.reduce(
    (accumulator, initialValue) => accumulator + initialValue,
    0
  ) / dolphinsScore.length;

const koalasAverage =
  koalasScore.reduce(
    (accumulator, initialValue) => accumulator + initialValue,
    0
  ) / dolphinsScore.length;

if (dolphinsAverage > koalasAverage) {
  console.log("Dolphins win the trophy");
} else if (koalasAverage > dolphinsAverage) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}
