const fs = require("fs").promises;
const path = require('path');

/*********************************
 
### Task 6: Error Handling

**Instructions**:

1. Write a script that attempts to read a file that does not exist.
2. Implement error handling to gracefully handle the error and print an appropriate message to the console.

***********************************/

const filePath = path.join(__dirname, "txt/file.txt");


const handleErrors = async () => {
  try {
    await fs.readFile(filePath, "utf-8");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

handleErrors();
