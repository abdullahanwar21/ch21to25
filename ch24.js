// Q-11
document.write(`<h3>Q-1 Write a program that takes user input. Convert and
        show the input in title case.!!</h3>`);
let askUser = prompt('Enter word i"ll show You Title Case !!');
document.write(`User Input : ${askUser} </br>`);
function titleCase(string) {
  let sentence = string.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  document.write("Title Case : " + sentence.join(" "));
  return sentence;
}

titleCase(askUser);
document.write("<br><br><hr>");

// Q-12
document.write(`<h3>Q-2 Write a program that converts the variable num to
        string.!!</h3>`);
let num = 35.36;
let numToStr = String(num);
document.write("Number : ", num, "<br>");
document.write("Result : ", numToStr.replace(".", ""), "<br>");
// document.write("Result : ", numToStr.replace(".",numToStr.slice(2,2)) , "<br>");
document.write("Type  : ", typeof numToStr, "<br>");
document.write("<br><br><hr>");

// Q-13
document.write(`<h3>Q-3  Write a program to take user input and store username
      in a variable. If the username contains any special symbol
      among [@ . , !], prompt the user to enter a valid username.
      For character codes of [@ .</h3>`);
let userName = prompt("Please Enter Your Username Don't Use(@ , . !) Symbol");
let asciiChar = String.fromCharCode(64, 33, 44, 46);

asciiChar = asciiChar.split("");
for (let i = 0; i < userName.length; i++) {
  // console.log(userName);
  console.log(userName[i]);
  for (const item2 of asciiChar) {
    if (userName[i] == item2) {
      alert(`CM${item2}D Is Not Valid ${item2}`);
      userName = prompt("Enter Your User Name");
    }
  }
}
document.write("username :", userName, "<br>");
document.write("<br><br><hr>");
