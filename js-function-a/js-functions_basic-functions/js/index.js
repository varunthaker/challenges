const { log } = require("console");

console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const bookTitle = "Varun";
const authorName = "Lo";
let rating = 4.2;
let numberOfSales = 100;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120


Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

console.log(`Title: ${bookTitle}`);
console.log(`Author: ${authorName}`);
console.log(`Rating ${rating}`);
console.log(`Sales ${numberOfSales}`);

// rating = 5;

// console.log(rating);
// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

logBookdata = (numberOfSales) => {
  console.log(`Title: ${bookTitle}`);
  console.log(`Author: ${authorName}`);
  console.log(`Rating ${rating}`);
  console.log(`Sales ${numberOfSales}`);
};

numberOfSales += 2;

logBookdata(numberOfSales);

// --^-- write your code here --^--
