// Use the BMI example from Challenge #6, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

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

const BMIMark1 = calculateBMI(massMark_testData1, heightMark_testData1);
const BMIJohn1 = calculateBMI(massJohn_testData1, heightJohn_testData1);

const BMIMark2 = calculateBMI(massMark_testData2, heightMark_testData2);
const BMIJohn2 = calculateBMI(massJohn_testData2, heightJohn_testData2);

if (BMIJohn1 > BMIMark1) {
  console.log(`John's BMI (${BMIJohn1}) is higher than Mark's (${BMIMark1})`);
} else {
  console.log(`Mark's BMI (${BMIMark1}) is higher than John's (${BMIJohn1})`);
}
decodeURI;

if (BMIJohn2 > BMIMark2) {
  console.log(`John's BMI (${BMIJohn2}) is higher than Mark's (${BMIMark2})`);
} else {
  console.log(`Mark's BMI (${BMIMark2}) is higher than John's (${BMIJohn2})`);
}
