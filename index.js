/*1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(a, b) {
  let num1 = a;
  let num2 = b;
  let difference = num1 - num2;
  return difference;
}
let result = calculateDifference(10, 5);
document.write(result);*/

/*2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num) {
  let a = num;
  if (a % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

let result = isOdd(49);
document.write(result);*/

/*3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array*/

/*function findMin(arr) {
  if (arr.length === 0) {
    return null;
  }
  let min = arr[0];
  for (let i = 1; i < arr.length; i = i + 1) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let numbers = [5, 3, 7, 3, 1];
let minNumber = findMin(numbers);
document.write(minNumber);*/

/*4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.*/

/* function filterEvenNumbers(arr) {
  if (arr.length === 0) {
    return null;
  }
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}
let numbers = [10, 44, 7, 6, 1, 4];
let evenNumbers = filterEvenNumbers(numbers);
//console.log(filterEvenNumbers);
document.write(evenNumbers);
*/

/*5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.*/

/*
function sortArrayDescending(arr) {
  if (arr.length === 0) {
    return null;
  }
  let descendingNumbers = [...arr];
  for (let i = 0; i < descendingNumbers.length; i = i + 1) {
    for (let j = 0; j < descendingNumbers.length - 1; j = j + 1) {
      if (descendingNumbers[j] < descendingNumbers[j + 1]) {
        let temp = descendingNumbers[j];
        descendingNumbers[j] = descendingNumbers[j + 1];
        descendingNumbers[j + 1] = temp;
      }
    }
  }
  return descendingNumbers;
}
let numbers = [10, 44, 7, 6, 1, 4, 44];
let sorting = sortArrayDescending(numbers);

console.log(sorting);
document.write(sorting);

*/

/*6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
function lowercaseFirstLetter(str) {
  if (str.length === 0) {
    return "";
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result += str[i].toLowerCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
let example = "HELLO";
let lowercaseString = lowercaseFirstLetter(example);

console.log(lowercaseString);*/

/*7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(str) {
  let vowelCount = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i = i + 1) {
    if (vowels.includes(str[i])) {
      vowelCount = vowelCount + 1;
    }
  }
  return vowelCount;
}
let example = "MERNSTACK";
let numofVowels = countVowels(example);
console.log(numofVowels); */

/*8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.*/

/*function findAverage(arr) {
  if (arr.length === 0) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  return average;
}

let numbers = [4, 1, 6, 3, 2, 7, 8];
let average = findAverage(numbers);

console.log(average);

*/