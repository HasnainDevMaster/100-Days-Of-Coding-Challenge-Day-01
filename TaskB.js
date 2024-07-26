"use strict";
// *100 Days Of Coding Challenge!
/**
 **Question 2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?” */
/*
*Answer: This code effectively combines the quote and its author, creating a meaningful message.

*Variable Definitions:

*quote: A string variable that holds the quote: “A person who never made a mistake never tried anything new.”

*author: A string variable that holds the author’s name: “Albert Einstein.”

*Template Literal**:

*The console.log() statement uses a template literal (enclosed in backticks) to create a formatted string.

*${author} and ${quote} are placeholders that get replaced with the actual values of the author and quote variables, respectively.

*Output**:

*The final output will be printed to the console:

*Albert Einstein once said, "A person who never made a mistake never tried anything new."*/
// *Define the quote and its author
const quote = "A person who never made a mistake never tried anything new.";
const author = "Albert Einstein";
// *Print the output
console.log(`${author} once said, "${quote}"`);
