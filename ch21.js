//  Q-1
document.write(
  `<h3>Q-1 ask first & last name and merge them  with Full Name & greet user!!</h3>`
);
let firstName = prompt("Enter Your First Name!");
let lastName = prompt("Enter Your Last Name!");
document.write("Hello " + firstName.concat(lastName) + "<br>");
document.write("<br><br><hr>");
//  Q-2
document.write(`<h3>Q-2Write a program to take a user input about his favorite
    mobile phone model. Find and display the length of user input in your browser!!</h3>`);
let fvrtMob = prompt("ENter Your Favourate Mobile Model !");
document.write("Your Favorate Mobile Model is : " + fvrtMob + "<br>");
document.write("Length OF STring :  " + fvrtMob.length + "<br>");
document.write("<br><br><hr>");

// Q-3
document.write(`<h3>Q-3 Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .!!</h3>`);
let pakStr = "Pakistan";
document.write("String :", pakStr, "<br>");
document.write("Index of 'n' :", pakStr.indexOf("n"), "<br>");
document.write("<br><br><hr>");
