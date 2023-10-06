const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, "Kengan Ashura"), (err) => {
    if (err) throw err
    console.log("New directory was created")
})

// Check if the directory exists or not
// if (!fs.existsSync(__dirname, "Kengan Ashura")) {
//     fs.mkdir(path.join(__dirname, "Kengan Ashura"), (err) => {
//         if (err) throw err
//         console.log("New directory was created")
//     })
// }
// Check if the directory exists or not
// Remove the folder
// if (fs.existsSync(__dirname, "Mortal Kombat")) {
//     fs.rmdir(path.join(__dirname, "Mortal Kombat"), (err) => {
//         if (err) throw err
//         console.log("New directory was removed")
//     })
// }
// Remove the folder