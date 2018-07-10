const http = require('http');
const date = require('./date-module');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  /*res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('Hello World - ' + date.myDateTime() + '\n');
  res.write(req.url+'\n');
  console.log(req.url);
  const q = url.parse(req.url, true).query;
  const txt = q.year + ' ' + q.month;
  res.write(txt+'\n');
  console.log(txt);*/
  fs.readFile('html/index.html', (err, data) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  })
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/\n' + 'Start: ' + date.myDateTime());
});
