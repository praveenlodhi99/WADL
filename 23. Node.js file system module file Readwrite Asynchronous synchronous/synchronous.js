// 23. Node.js file system module: file Read/write Asynchronous/synchronous

const fs = require('fs');

// Synchronous file read
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(data);
} catch (error) {
    console.error('Error reading file:', error);
}

// Synchronous file write
try {
    fs.writeFileSync('example.txt', 'This is a synchronous write.');
    console.log('File written successfully.');
} catch (error) {
    console.error('Error writing file:', error);
}
