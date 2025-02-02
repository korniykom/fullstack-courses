/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using 
the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

    Store Mark's and John's mass and height in variables called massMark, heightMark,
     massJohn and heightJohn.

    Calculate both their BMIs using the formula, and store the results in two variables
     called BMIMark and BMIJohn.

    Log the value of BMIMark and BMIJohn to the console.

    BONUS: Create a boolean variable markHigherBMI containing information about whether
     Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

const massMark_testData1 = 78;
const massJohn_testData1 = 92;

const heightMark_testData1 = 1.69;
const heightJohn_testData1 = 1.95;

const massMark_testData2 = 95;
const massJohn_testData2 = 85;

const heightMark_testData2 = 1.88;
const heightJohn_testData2 = 1.76;

function calculateBMI(mass, height) {
  return mass / height ** 2;
}

console.log(calculateBMI(massJohn_testData1, heightJohn_testData1));
console.log(calculateBMI(massJohn_testData2, heightJohn_testData2));
console.log(calculateBMI(massJohn_testData1, heightJohn_testData1));
console.log(calculateBMI(massMark_testData2, heightMark_testData2));
