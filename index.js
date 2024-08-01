const fs = require("fs").promises;

/*********************************
 
### Task 1: Basic File Operations

**Instructions**:

1. Write a script that creates a new text file called `example.txt` and writes the string "Hello, World!" into it.
2. Modify the script to append "This is Node.js FS module." to the same file.
3. Read the contents of `example.txt` and print them to the console.

***********************************/

const data = "Hello, World!\n";
const dataToAppend = "This is Node.js FS module.";

const createFileAndModify = async () => {
  const filePath = "txt/example.txt";
  try {
    await fs.writeFile(filePath, data);
    await fs.appendFile(filePath, dataToAppend);
    const fileData = await fs.readFile(filePath, "utf-8");
    console.log(fileData);
  } catch (err) {
    console.log(err);
  }
};

createFileAndModify();
