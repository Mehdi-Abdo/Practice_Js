/*let ConfirmMsg = confirm("Message");
console.log(ConfirmMsg);
if(ConfirmMsg === true){
    console.log("item deleted");
 } else{
        console.log("item not deleted");
    }*/
    
//let promptMsg = prompt("good day to you ?","write day 3 carachters");
//console.log(promptMsg);

/*setInterval(function() {
    console.log('message');
    document.write('message');
}, 1000);*/

/*window.localStorage.setItem("color","red");
console.log(window.localStorage);
window.localStorage.getItem("color")
console.log(window.localStorage.getItem("color"));*/

  // exercice 01
  // Function to display the current day and time
/*function displayDateTime() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();

    // Get current day
    const day = days[now.getDay()];

    // Get current time
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Determine AM or PM
    const amPm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    // Display the output
    console.log(`Today is : ${day}.`);
    console.log(`Current time is : ${hours} ${amPm} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`);
}

// Call the function
displayDateTime();*/


// Define a function named print_current_page
/*function print_current_page() {
    // Call the window.print() method to initiate the printing of the current page
    window.print();
} */

//exercice 3 :mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// Get the current date
/*var today = new Date();

// Get the day of the month
var dd = today.getDate();

// Get the month (adding 1 because months are zero-based)
var mm = today.getMonth() + 1;

// Get the year
var yyyy = today.getFullYear();


// Format the date as mm-dd-yyyy and log it
today = mm + '-' + dd + '-' + yyyy;
console.log(today);

// Format the date as mm/dd/yyyy and log it
today = mm + '/' + dd + '/' + yyyy;
console.log(today);

// Format the date as dd-mm-yyyy and log it
today = dd + '-' + mm + '-' + yyyy;
console.log(today);

// Format the date as dd/mm/yyyy and log it
today = dd + '/' + mm + '/' + yyyy;
console.log(today); */

//exercice 4: calculate area triangle
// Define the lengths of the three sides of a triangle
/*var side1 = 5; 
var side2 = 6; 
var side3 = 7; 

// Calculate the semi-perimeter of the triangle
var s = (side1 + side2 + side3) / 2;

// Use Heron's formula to calculate the area of the triangle
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

// Log the calculated area to the console
console.log(area);
*/

// exercice 9 :Write a JavaScript program to calculate the days left before Christmas.  
/*var dateNow = new Date();
var cmas = new Date(dateNow.getFullYear(), 12, 13);

var diff = dateNow-cmas;
// Check if the current date is after December 13th
if (dateNow.getMonth() == 12 && dateNow.getDate() > 13) {
    // If true, set Christmas for the next year
    cmas.setFullYear(cmas.getFullYear() + 1);
}  

// Calculate the difference in days between today and Christmas
var one_day = 1000 * 60 * 60 * 24;

// Log the number of days left until Christmas to the console
console.log(Math.ceil((cmas.getTime() - dateNow.getTime()) / (one_day)) +
    " days left until Christmas!"); */

//exercice 18: Check two given numbers and return true if one of the number is 50 or if their sum is 50
// Define a function named test50 that takes two parameters, x and y
/*function test50(x, y) {
    // Return true if x is equal to 50 or y is equal to 50 or the sum of x and y is equal to 50; otherwise, return false
    return ((x == 50 || y == 50) || (x + y == 50));
  }
  
  // Log the result of calling the test50 function with the arguments 50 and 50 to the console
  console.log(test50(50, 50));
  
  // Log the result of calling the test50 function with the arguments 20 and 50 to the console
  console.log(test50(20, 50));
  
  // Log the result of calling the test50 function with the arguments 20 and 20 to the console
  console.log(test50(20, 20));
  
  // Log the result of calling the test50 function with the arguments 20 and 30 to the console
  console.log(test50(20, 30));*/

  //exercice 20: Check two given integers, whether one is positive and another one is negative
  // Define a function named positive_negative that takes two parameters, x and y
/*function positive_negative(x, y) {
    // Check if either x is negative and y is positive, or x is positive and y is negative
    if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
      // If true, return true
      return true;
    } else {
      // If false, return false
      return false;
    }
  }
  
  // Log the result of calling the positive_negative function with the arguments 2 and 2 to the console
  console.log(positive_negative(2, 2));
  
  // Log the result of calling the positive_negative function with the arguments -2 and 2 to the console
  console.log(positive_negative(-2, 2));
  
  // Log the result of calling the positive_negative function with the arguments 2 and -2 to the console
  console.log(positive_negative(2, -2));
  
  // Log the result of calling the positive_negative function with the arguments -2 and -2 to the console
  console.log(positive_negative(-2, -2)); */
  
  
  //exercice 1: function 
  /*// Define a function named reverse_a_number that takes a parameter n
function reverse_a_number(n)
{
    // Convert the input number to a string
    n = n + "";

    // Split the string into an array of characters, reverse the array, and then join the characters back into a string
    return n.split("").reverse().join("");
}

// Convert the reversed string back to a number and log it to the console
console.log(Number(reverse_a_number(32243)));*/

//exercice 5: Converts the first letter of each word of a string in upper case
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word to uppercase.
/*function uppercase(str) {
    // Split the input string into an array of words
    var array1 = str.split(' ');
  
    // Initialize an empty array to store the modified words
    var newarray1 = [];
  
    // Iterate through each word in the array
    for (var x = 0; x < array1.length; x++) {
      // Push the word with its first letter capitalized and the rest of the letters unchanged
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
  
    // Join the modified words into a single string, separated by spaces
    return newarray1.join(' ');
  }
  
  // Log the result of calling uppercase with the input string "the quick brown fox" to the console
  console.log(uppercase("the quick brown fox")); */
  
  //exercice 6:find the longest word within a string
  /*// Define a function named find_longest_word that takes a string parameter (str)
function find_longest_word(str) {
  // Use a regular expression to match words in the input string and store them in an array (array1)
  var array1 = str.match(/\w[a-z]{0,}/gi);

  // Initialize a variable result with the first word from the array
  var result = array1[0];

  // Iterate through the array of words starting from the second word
  for (var x = 1; x < array1.length; x++) {
    // Check if the length of the current word is greater than the length of the current result
    if (result.length < array1[x].length) {
      // If true, update the result with the current word
      result = array1[x];
    } 
  }

  // Return the longest word found
  return result;
}

// Log the result of calling find_longest_word with the input string 'Web Development Tutorial' to the console
console.log(find_longest_word('Web Development Tutorial'));*/

 