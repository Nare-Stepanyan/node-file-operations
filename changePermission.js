const fs = require("fs").promises;

/*********************************
 
### Task 8: Permissions and Metadata

**Instructions**:

1. Write a script that reads and prints the metadata (e.g., size, creation date) of a given file.
2. Modify the script to change the permissions of the file to read-only.

***********************************/

const printMetadata = async () => {
  try {
    const metadata = await fs.stat("txt/template.txt");
    console.log(metadata);
  } catch (err) {
    console.log(err.message);
  }
};
const makeFileReadOnly = async () => {
  try {
    await fs.chmod("txt/template.txt", 0o400);
  } catch (err) {
    console.log(err.message);
  }
};

printMetadata();
makeFileReadOnly();
