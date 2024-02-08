const port = 3001;
const http = require('http');

http.createServer((req, res) => {
    console.log(req.url);

    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Hello, World!</h1>`);
}).listen(port);

console.log(`Server is running on http://localhost:${port}/`);

