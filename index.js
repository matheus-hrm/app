const http = require('http');


http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/JSON ' });
    res.end (JSON.stringify({ message: 'Hello World' }));
  })
  .listen(3000, () => {
    console.log('Server is running on port 3000');
  });