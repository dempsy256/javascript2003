// Exercise 1
function myName() {
  const fullName = "Namirembe Redemptor"; 
  console.log(fullName);
}

// Example usage:
myName();


// Exercise 2
// Step 1: Create the array of favorite foods
const favoriteFoods = ["pizza", "ice cream"];

// Step 2: Create the function to return a random food
function randomFood() {
  // Generate a random number between 0 and 1, then multiply it by the array's length (2)
  // This gives a random number between 0 and 1.999...
  const randomIndex = Math.floor(Math.random() * 2);
  
  // Use the random index to get an element from the array
  return favoriteFoods[randomIndex];
}

// Example usage:
console.log(randomFood()); // Will print either "pizza" or "ice cream"