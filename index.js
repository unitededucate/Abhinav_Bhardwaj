const express = require('express')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/users', require('./routes/api/users'))
app.listen(3000, () => {
    console.log('Server started at port 3000')
})




// const http = require('http');
// const { getHeapStatistics } = require('node:v8');


// http.createServer((req, res) => {
//     res.writeHead(200, 'utf-8', { 'Content-Type': 'text/html' })
//     res.write('Hello World\n\n');
//     console.log(req);
//     res.end('THIS IS WORKING');
// }).listen(3000);
// app.get('//', (req, res) => {
//     // res.writeHead(200, 'utf-8', { 'Content-Type': 'text/html' })
//     // res.write(" <h1>HELLO EVERYONE</h1> <br>Hello world! ");
//     // res.end();
//     res.send(200, 'utf-8', { 'Content-Type': 'text / html' });

//     res.write('<h1>HELLO EVRYONE</h1>')
//     res.end();
// })

// const server = app.listen(3000, () => {
//     const host = server.address().address;
//     const port = server.address().port;
//     console.log(`${port} -- ${host}`);
// })