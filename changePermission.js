const fs = require("fs").promises;
const path = require('path');
const constants = require("./constants")

/*********************************
 
### Task 8: Permissions and Metadata

**Instructions**:

1. Write a script that reads and prints the metadata (e.g., size, creation date) of a given file.
2. Modify the script to change the permissions of the file to read-only.

***********************************/

const filePath = path.join(__dirname, "txt/template.txt");

const printMetadata = async () => {
  try {
    const metadata = await fs.stat(filePath);
    console.log(metadata);
  } catch (err) {
    console.log(err.message);
  }
};
const makeFileReadOnly = async () => {
  try {
    await fs.chmod(filePath, constants.readonly);
  } catch (err) {
    console.log(err.message);
  }
};

printMetadata();
makeFileReadOnly();
