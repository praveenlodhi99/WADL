// Import the 'http' module
const http = require('http');

// Define the port number for the server to listen on
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body as "Hello World"
  res.end('Hello World\n');
});

// Start the server and have it listen on the specified port
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
