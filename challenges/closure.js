// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//You start by reading from top to bottom, however we have to take into account that the function declarations are not read, they are just for
//declaring the functions and everything inside them. The nested function is the first to be called, and since it is valid and inside an existing
//and working myFunction, it would console log 'internal' and display the message.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  let counter = 0;
  
  for (let i = 1; i <= num; i++) {

    counter = counter + i;
  }
  return counter;
}

console.log(summation(4));