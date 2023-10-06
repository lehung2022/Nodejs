// Declaring variables
const fs = require('fs');
const path = require('path');
// Declaring variables
// Implementing them
const rs = fs.createReadStream(path.join(__dirname, "files", "stream file.txt"), { encoding: 'utf8' });
const ws = fs.createWriteStream(path.join(__dirname, "files", "new stream file.txt"), { encoding: 'utf8' });
// Implementing them
// Listening for the data coming in from the string
rs.pipe(ws)
// Listening for the data coming in from the string