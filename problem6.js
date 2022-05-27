//6//Write a code to get an integer N and print the sum of values from 1 to N.

// program to display the sum of natural numbers

// take input from the user
const number = 10;

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of numbers:', sum);