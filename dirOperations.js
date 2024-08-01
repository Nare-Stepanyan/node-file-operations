const fs = require("fs").promises;

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

const createAndManageDirectory = async () => {
  try {
    await fs.mkdir("testDir", { recursive: true });
    await fs.writeFile("testDir/testFile.txt", data);
    await delay(3000);
    await fs.rename("testDir/testFile.txt", "testDir/renamedFile.txt");
    await delay(3000);
    await fs.unlink("testDir/renamedFile.txt");
    await delay(3000);
    await fs.rmdir("testDir");
  } catch (err) {
    console.log(err);
  }
};

createAndManageDirectory();
