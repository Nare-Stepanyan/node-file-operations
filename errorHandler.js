const fs = require("fs").promises;

/*********************************
 
### Task 6: Error Handling

**Instructions**:

1. Write a script that attempts to read a file that does not exist.
2. Implement error handling to gracefully handle the error and print an appropriate message to the console.

***********************************/

const handleErrors = async () => {
  try {
    await fs.readFile("txt/file.txt", "utf-8");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

handleErrors();
