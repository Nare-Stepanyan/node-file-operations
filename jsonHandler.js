const fs = require("fs").promises;
const path = require("path");

/*********************************
 
### Task 4: JSON File Handling

**Instructions**:

1. Create a JSON file called `data.json` with some sample data (e.g., a list of users with names and ages).
2. Write a script to read the JSON file and parse its contents into a JavaScript object.
3. Add a new user to the object and write the updated object back to the JSON file.

***********************************/

const filePath = path.join(__dirname, "data.json");

const addUser = async (user) => {
  try {
    const users = await fs.readFile(filePath, "utf-8");
    const userList = JSON.parse(users);
    userList.users.push(user);
    const convertedUserList = JSON.stringify(userList, null, 2);
    await fs.writeFile(filePath, convertedUserList);
  } catch (err) {
    console.log(err);
  }
};

addUser({ name: "Tommy", age: 20 });
