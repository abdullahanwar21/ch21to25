
      // Q-8
      document.write(`<h3>Q-1 Write a program to replace all occurrences of “and” in the
                string with “&” and display the result in your browser.!!</h3>`);
      let message =
        " Ali and Sami are best friends. They play cricket and football together";
      let replaceAllTheEnd = message.replaceAll("and", "&");
      document.write("The Real message with and :", message, "<br>");
      document.write(
        "The word replace and  with & : ",
        replaceAllTheEnd,
        "<br>"
      );
      document.write("<br><br><hr>");

      // Q-9
      document.write(
        `<h3>Q-2 Write a program that converts a string “472” to a number 472. Display the values & types in your browser.!!</h3>`
      );
      let strToNum = "472";
      document.write("Value : ", strToNum, "<br>");
      document.write("Type : ", typeof strToNum, "<br>");
      document.write("Value : ", strToNum, "<br>");
      document.write("Type : ", typeof Number(strToNum), "<br>");
      document.write("<br><br><hr>");

      // Q-10
      document.write(`<h3>Q-3 Write a program that takes user input. Convert and
        show the input in capital letters..!!</h3>`);
      let userInputToUpperCase = prompt("Enter Some word i\"ll show you Upper Case");
      document.write("User Input : ", userInputToUpperCase, "<br>");
      document.write(
        "Upper Case : ",
        userInputToUpperCase.toUpperCase(),
        "<br>"
      );
      document.write("<br><br><hr>");
