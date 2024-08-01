const fs = require("fs").promises;
const fileSystem = require("node:fs");

/*********************************
 
### Task 3: Synchronous vs. Asynchronous Operations

**Instructions**:

1. Write two scripts:
   - One that uses synchronous methods (`fs.readFileSync`, `fs.writeFileSync`) to read from and write to a file.
   - Another that uses asynchronous methods (`fs.readFile`, `fs.writeFile`) to achieve the same functionality.
2. Compare the scripts and note the differences in their execution.

***********************************/

// This will block the entire event loop
const useSyncMethods = () => {
  const data = fileSystem.readFileSync("txt/template.txt", "utf-8");
  fileSystem.writeFileSync("txt/templateCopy.txt", data);
};

// This will allow other I/O operations continue running in the event loop
const useAsyncMethods = async () => {
  try {
    const data = await fs.readFile("txt/template.txt", "utf-8");
    await fs.writeFile("txt/templateCopyAsync.txt", data);
  } catch (err) {
    console.log(err);
  }
};

useSyncMethods();
useAsyncMethods();
