const fs = require("fs").promises;
const path = require('path');

/*********************************
 
### Task 2: File and Directory Management

**Instructions**:

1. Write a script that creates a directory called `testDir`.
2. Inside `testDir`, create a new file called `testFile.txt` and write some text into it.
3. Rename `testFile.txt` to `renamedFile.txt`.
4. Delete `renamedFile.txt` and then delete `testDir`.

***********************************/

// This function is just for watching the changes
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const data = "Hello, World!\n";
const filePath = path.join(__dirname, "testDir");


const createAndManageDirectory = async () => {
  try {
    await fs.mkdir(filePath, { recursive: true });
    await fs.writeFile(`${filePath}/testFile.txt`, data);
    await delay(3000);
    await fs.rename(`${filePath}/testFile.txt`, `${filePath}/renamedFile.txt`);
    await delay(3000);
    await fs.unlink(`${filePath}/renamedFile.txt`);
    await delay(3000);
    await fs.rmdir(filePath);
  } catch (err) {
    console.log(err);
  }
};

createAndManageDirectory();
