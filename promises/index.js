const fs = require("fs");
const fsv2 = require("fs/promises");

/**
 * Its a bloking code
 * 
console.log("Starting code");

const content = fs.readFileSync("./hello.txt", "utf-8");

console.log("File reading success:", content);

console.log("Ending code");

OUTPUT: Starting code
        File reading success: File reading success, Hello from hello.txt file
        Ending code

*/

// what if promises does not exist, then relay on callbacks

console.log("Starting code");

fs.readFile("./hello.txt", "utf-8", function (err, content) {
  if (err) {
    console.log("Error reading file: ", err);
  } else {
    console.log("File reading success:", content);
  }
});

console.log("Ending code");

// learn about promisification
