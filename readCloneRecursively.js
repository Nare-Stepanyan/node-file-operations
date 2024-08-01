const fs = require("fs").promises;

/*********************************
 
### Task 7: Recursive Directory Operations

**Instructions**:

1. Create a script that recursively lists all files and directories within a given directory.
2. Write another script that copies the contents of one directory to another, preserving the directory structure.

***********************************/

const displayFilesAndDirectories = async () => {
  const data = await fs.readdir("txt", { recursive: true });
  console.log(data);
};

const cloneDirectoryContent = async () => {
  await fs.cp("txt", "copy", { recursive: true });
};

displayFilesAndDirectories();
cloneDirectoryContent();
