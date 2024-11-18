/* Assignment 2
Task 1: Obtaining String Length
-Create a string with some text cocntent
-Use 'length' to obtain the length of the string

Task 2: Converting Cases
-Use 'toUpperCase' to convert to all caps, use 'toLowerCase' to convert to lowercase

Task 3: Extracting Substrings
-Create a string with some text content
-Use 'substring' to extract a substring from the original string

Task 4: Splitting Strings
-Use 'split' to split the string into an array of words based on the space delimiter
*/

// String for Task 1 and 2
let message = "Hello, World!";

// Task 1
console.log(message.length);

// Task 2
console.log(message.toUpperCase);
console.log(message.toLowerCase);

// String for Task 3
let sentence = "The quick brown fox jumps over the lazy dog";

// Task 3
console.log(sentence.substring(0, 19));

//Task 4
console.log(sentence.split(" "));