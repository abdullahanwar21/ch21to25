// Q-14
document.write(`<h3>Q-14 You have an array
      A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
      Write  program to enable “search by user input” in an 
      array. After searching, prompt the user whether the given 
      item is found in the list or not.
      Note: Perform case insensitive search. Whether the user 
      enters cookie, Cookie, COOKIE or coOkIE, program 
      should inform about its availability. Example.</h3>`);
function searchArray() {
  let bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"];
  let userInput = prompt(
    `Enter an item to search("cake", "apple pie", "cookie", "chips", "patties"): `
  );
  let found = false;
  for (let i = 0; i < bakeryItem.length; i++) {
    if (bakeryItem[i].toLowerCase() === userInput.toLowerCase()) {
      found = true;
      alert(`${userInput}  is available in the list at index ${i + 1} `);
      document.write(
        `${userInput}  is available in the list at index ${i + 1} <br>`
      );
      break;
    }
  }
  if (!found) {
    alert(userInput + " is not available in the list.");
    document.write(userInput + " is not available in the list.<br>");
  }
}
searchArray();
document.write("<br><br><hr>");

// Q-15
document.write(`<h3>Q-15 Write a program to take password as an input from 
      user. The password must qualify these requirements:
      a. It should contain alphabets and numbers
      b. It should not start with a number
      c. It must at least 6 characters long
      If the password does not meet above requirements,
      prompt the user to enter a valid password.
      For character codes of a-z, A-Z & 0-9, refer to ASCII
      table at the end of this document..</h3>`);
function validatePassword() {
  let password = prompt("Enter your password: must be 6 character ");
  let regex = /^[a-zA-Z][a-zA-Z0-9]{5,}$/;
  if (regex.test(password)) {
    alert("Valid password!");
    document.write("Valid password!")
  } else {
    alert("Invalid password. Please enter a valid password.");
    document.write("Invalid password. Please enter a valid password.");
  }
}
validatePassword();
document.write("<br><br><hr>");

// Q-16
document.write(`<h3>Q-16 Write a program to convert the following string to an
      array using string split method.</h3>`);
let strToArray = "Karachi University";
strToArray = strToArray.split("");
for (const elem of strToArray) {
  document.write(`${elem}<br>`);
}
document.write("<br><br><hr>");

// Q-17
document.write(`<h3>Q-17 Write a program to display the last character of a user
      input..</h3>`);

let usrInput = prompt('ENter The Word i"ll show You Last Charcter');
document.write(`User Input :  ${usrInput} <br>`);
document.write(`Last Character Of Input :  ${usrInput.slice(-1)} <br>`);
document.write("<br><br><hr>");

// Q-18
document.write(`<h3>Q-18 You have a string “The quick brown fox jumps the over the
            lazy dog”. Write a program to count number of
            occurrences of word “the” in given string..</h3>`);
let theString = "The quick brown fox jumps over the lazy dog.";
// we should convert our sentence into lowercase
theString = theString.toLowerCase();
function countRepeatedWords(sentence) {
  // Step-1 string into Array
  let theString = sentence.split(" ");
  // Step-2 Create Empty Object
  let wordMap = {};
  // Step-3 Iterate the value of split array in Empty Object
  for (let i = 0; i < theString.length; i++) {
    let currentWordCount = wordMap[theString[i]];
    // Step-4  ternary operator to check if loop iterate and the same word find then add one each iteration otherwise 0
    let count = currentWordCount ? currentWordCount : 0;

    wordMap[theString[i]] = count + 1;
  }
  // Step-5 Returning our end result bcz all the words now object keys with their counting Quantity if the is available two times e.g the:2
  return wordMap;
}
// Step-6 Calling The Function
let counting = countRepeatedWords(theString);
// Step-7 Just Searching "the" word how many times we have our sentence.
// its return the counting value 2
let res = counting["the"];
document.write(`Text :  ${theString} <br>`);
document.write(`There Are ${res} Occurance(s) of Word "the" <br>`);
document.write("<br><br><hr>");
