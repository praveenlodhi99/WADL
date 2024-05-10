// 23. Node.js file system module: file Read/write Asynchronous/synchronous

const fs = require('fs');

// Asynchronous file read
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log(data);
    }
});

// Asynchronous file write
fs.writeFile('example.txt', 'This is an asynchronous write.', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully.');
    }
});
