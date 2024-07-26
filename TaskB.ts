// *100 Days Of Coding Challenge!

/**
 **Question 2: Personal Message: Store a person’s name in a variable, and print a message to that person.
 **Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?” */

/* 
*Answer: This TypeScript code demonstrates a simple program that stores a person's name in a variable, 
*constructs a personalized message, and then prints the message to the console.

*Variable Declaration:

*We begin by declaring a constant variable named personName with the type string.
*The value assigned to personName is the string "Sam".
*Essentially, we’re storing the name of the person we want to address in our message.

*Message Creation:

*Next, we create another constant variable called message.
*Using string interpolation (indicated by the backticks ``), we construct the message.
*The ${personName} part is replaced with the actual value of personName.
*The resulting message will be something like: “Hello Sam, would you like to learn some Python today?”

*Printing the Message:

*Finally, we use console.log(message) to display the message in the console when the code runs.
*The output will be the customized greeting with the person’s name.*/
 
let studentName: string = "Sam";
let message: string = `Hello ${studentName}, would you like to learn some Python today?`;
console.log(message);
