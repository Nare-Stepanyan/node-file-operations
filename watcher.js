const fs = require("node:fs");
const path = require("path");

/*********************************

### Task 5: File Watching

**Instructions**:

1. Write a script that watches a directory called `watchDir` for changes.
2. Whenever a file is added, modified, or deleted in `watchDir`, log the event to the console.

***********************************/

const filePath = path.join(__dirname, "watchDir");
const watcher = fs.watch(filePath);
watcher.on("change", (eventType, fileName) => {
  if (eventType === "change") {
    console.log(
      `${fileName} has been changed\n e: ${eventType}, f: ${fileName}`
    );
  } else {
    console.log(
      `${fileName} has been added or removed\n e: ${eventType}, f: ${fileName}`
    );
  }
});
watcher.on("error", (error) => {
  console.error("Error watching directory:", error);
});
