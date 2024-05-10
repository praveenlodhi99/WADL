const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((request, response) => {
    // Handling requests
    if (request.url === '/') {
        // If the requested URL is '/', serve index.html
        fs.readFile('index.html', (err, data) => {
            if (err) {
                // If file reading fails, send a 404 error
                response.writeHead(404, {'Content-Type': 'text/html'});
                return response.end('404 Not Found');
            } else {
                // Send the content of index.html
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                return response.end();
            }
        });
    } else {
        // If the requested URL is not '/', send a 404 error
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('404 Not Found');
    }
});

// Define the port to listen on
const port = 8081;

// Start listening on the specified port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
