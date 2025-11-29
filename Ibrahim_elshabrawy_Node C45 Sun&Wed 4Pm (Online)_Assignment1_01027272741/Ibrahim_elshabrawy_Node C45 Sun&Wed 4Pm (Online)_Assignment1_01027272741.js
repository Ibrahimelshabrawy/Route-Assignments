// ================================= Question 1 ======================================
// let example = "123";
// example = Number(example) + 7;
// console.log(example);

// ================================= Question 2 ======================================
// const value = 0;

// console.log(value);

// if (
//   value === 0 ||
//   value === "" ||
//   isNaN(value) ||
//   value === undefined ||
//   value === null ||
//   value === false
// ) {
//   console.log("Invalid");
// }

// ================================= Question 3 ======================================
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 != 0) {
//     continue;
//   }
//   console.log(i);
// }

// ================================= Question 4 ======================================
// let arr = [1, 2, 3, 4, 5];
// let print = arr.filter((el) => {
//   return el % 2 == 0;
// });
// console.log(print);

// ================================= Question 5 ======================================
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// // First solution
// arr1 = [...arr1, ...arr2];
// console.log(arr1);

// // Second Soultion
// for (let i = 0; i < arr2; i++) {
//   const element = arr2[i];
//   arr1.push(element);
// }
// console.log(arr1);

// ================================= Question 6 ======================================
// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wedensday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
// }

// ================================= Question 7 ======================================
// let stringArray = ["a", "ab", "abc"];
// let lengthOfStringArray = stringArray.map((el) => {
//   return el.length;
// });
// console.log(lengthOfStringArray);

// ================================= Question 8 ======================================
// function checkNumber(num) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log("Divisible By Both");
//   } else {
//     console.log("Cannot Divisible By Both");
//   }
// }
// checkNumber(15);

// ================================= Question 9 ======================================
// let squareNumber = (num) => {
//   console.log(num * num);
// };
// squareNumber(7);

// ================================= Question 10 ======================================
// const person = {
//   name: "John",
//   age: 25,
// };
// let destructObj = function ({name, age} = person) {
//   console.log(`${name} Is ${age} Years Old`);
// };
// destructObj(person);

// ================================= Question 11 ======================================
// function sum(...num) {
//   // Spread Operator
//   let summation = 0;
//   for (const number of num) {
//     summation += number;
//   }
//   console.log(summation);
// }
// sum(1, 2, 3, 4, 5);

// ================================= Question 12 ======================================

// ================================= Question 13 ======================================
// let arrayOfNumbers = [1, 3, 7, 2, 4];

// let largestNumber = function (arrayOfNumbers) {
//   let large = arrayOfNumbers[0];
//   for (let i = 0; i < arrayOfNumbers.length; i++) {
//     if (arrayOfNumbers[i] > large) {
//       large = arrayOfNumbers[i];
//     }
//   }
//   console.log(large);
// };
// largestNumber(arrayOfNumbers);

// ================================= Question 14 ======================================
// let person = {
//   name: "John",
//   age: 30,
// };

// let returnArrOfKeys = function (person) {
//   let arr1 = [];

//   // For-in الوحيده اللي تقدر تلف على اوبجكت و ارراي
//   for (const key in person) {
//     arr1.push(key);
//   }
//   console.log(arr1);
// };
// returnArrOfKeys(person);

// ================================= Question 15 ======================================
// let sentence = "The Quick Brown Fox";
// sentence.split()
// let splitSentence = function (sentence) {
//   console.log(sentence.split(" "));
// };
// splitSentence(sentence);

