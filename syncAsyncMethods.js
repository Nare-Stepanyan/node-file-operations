const fs = require("fs").promises;
const fileSystem = require("node:fs");
const path = require("path");

/*********************************
 
### Task 3: Synchronous vs. Asynchronous Operations

**Instructions**:

1. Write two scripts:
   - One that uses synchronous methods (`fs.readFileSync`, `fs.writeFileSync`) to read from and write to a file.
   - Another that uses asynchronous methods (`fs.readFile`, `fs.writeFile`) to achieve the same functionality.
2. Compare the scripts and note the differences in their execution.

***********************************/

const filePath = path.join(__dirname, "txt/template.txt");

// This will block the entire event loop
const useSyncMethods = () => {
  const filePathWrite = path.join(__dirname, "txt/templateCopy.txt");
  const data = fileSystem.readFileSync(filePath, "utf-8");
  fileSystem.writeFileSync(filePathWrite, data);
};

// This will allow other I/O operations continue running in the event loop
const useAsyncMethods = async () => {
  try {
    const filePathWrite = path.join(__dirname, "txt/templateCopyAsync.txt");

    const data = await fs.readFile(filePath, "utf-8");
    await fs.writeFile(filePathWrite, data);
  } catch (err) {
    console.log(err);
  }
};

useSyncMethods();
useAsyncMethods();
