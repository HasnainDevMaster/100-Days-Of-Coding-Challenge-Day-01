// *100 Days Of Coding Challenge!

/**
 **Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. */

/** 
**Answer: This code demonstrates how to manipulate the case of a person’s name using built-in string methods.
 
**Variable Definition:

**personName: A string variable storing the name “Sam.”

**Lowercase Output:

**personName.toLowerCase(): Converts the name to lowercase.
**Output: “Lowercase: sam”

**Uppercase Output:

**personName.toUpperCase(): Converts the name to uppercase.
**Output: “Uppercase: SAM”

**Title Case Output:

**personName.charAt(0).toUpperCase(): Retrieves the first character (initial) of the name and converts it to uppercase.

**personName.slice(1).toLowerCase(): Retrieves the remaining characters (excluding the initial) and converts them to lowercase.

**Combines the initial and the rest to create title case.

**Output*: “Titlecase: Sam” */

// *Store the person's name in a variable
const personName: string = "Sam";

// *Print the name in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);

// *Print the name in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);

// *Print the name in title case
console.log(
  `Titlecase: ${personName.charAt(0).toUpperCase()}${personName
    .slice(1)
    .toLowerCase()}`
);
