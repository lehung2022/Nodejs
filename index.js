const { error } = require('console');
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

async function fileOp() {

    try {
        const data = await fsPromises.readFile(path.join(__dirname, "files", "Mangas.txt"), "utf8");
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, "files", "Promises are complete.txt"), data)

    } catch (err) {
        console.error(err);
    }
}

fileOp();

// fs.readFile(path.join(__dirname, "files", "Mangas.txt"), "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// }
// )

// console.log("Read the file...");



