const fs = require("fs").promises;
const path = require("path");

/*********************************
 
### Task 7: Recursive Directory Operations

**Instructions**:

1. Create a script that recursively lists all files and directories within a given directory.
2. Write another script that copies the contents of one directory to another, preserving the directory structure.

***********************************/

const filePath = path.join(__dirname, "txt");
const filePathCopy = path.join(__dirname, "copy");

const displayFilesAndDirectories = async () => {
  const data = await fs.readdir(filePath, { recursive: true });
  console.log(data);
};

const cloneDirectoryContent = async () => {
  await fs.cp(filePath, filePathCopy, { recursive: true });
};

displayFilesAndDirectories();
cloneDirectoryContent();
