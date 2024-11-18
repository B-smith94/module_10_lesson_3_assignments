/* Assignment 1
Task 1: Adding and Removing Elements
-Create an array containing some initial elements
-use "push" to add a new element at the end
-use "pop" to remove the last element

Task 2: Sorting Arrays
-Create an aray of numbers in random order
-Use "sort" to sor the array in ascending order

Task 3: Applying Array Methods
-Create an array of numbers
-Use "map" to double each number in the array
-Use "filter" to filter out even numbers
-Use "Reduce" to calculate the sum of all numbers in the array
*/

//Task 1
let fruits = ['apple', 'banana', 'orange'];
fruits.push('cherry');
console.log(fruits)

let lastFruit=fruits.pop();
console.log(lastFruit)

//Array for Tasks 2 and 3
let numbers = [3, 1, 5, 2, 4];

//Task 2
numbers.sort();
console.log(numbers);

//Task 3
let doubled = numbers.map(num => num*2)
console.log(doubled)

let evenNum = numbers.filter(num => num%2===0)
console.log(evenNum)

let sum = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sum)