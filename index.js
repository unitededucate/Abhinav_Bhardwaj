const http = require('http')


http.createServer((req, res) => {
    res.writeHead(200, 'utf-8', { 'Content-Type': 'text/html' })
    res.write('Hello World\n\n');
    console.log(req);
    res.end('THIS IS WORKING');
}).listen(3000);