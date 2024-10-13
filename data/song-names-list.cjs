const fs = require("fs");
const path = require("path");

function listSubdirectories(directoryPath) {
  try {
    // Read the contents of the directory
    const dirContents = fs.readdirSync(directoryPath);

    // Filter for subdirectories
    const subdirectories = dirContents.filter((item) => {
      const fullPath = path.join(directoryPath, item);
      return fs.statSync(fullPath).isDirectory();
    });

    fs.writeFileSync("./data/songlist.txt", "");

    // Log the names of the subdirectories
    console.log("Subdirectories:");
    subdirectories.forEach((dir) => {
      console.log(dir);
      fs.appendFileSync("./data/songlist.txt", `${dir}\n`);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Usage
const directoryPath = process.argv[2] || "./"; // Default to current directory if no argument provided
listSubdirectories(directoryPath);
