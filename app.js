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
  console.log(txt);

  fs.appendFile('data.log', 'new visit\n', (err) => {
    if(err) throw err;
    console.log('Saved!');
  });
  fs.writeFile('lastAccess.log', date.myDateTime(), (err) => {
    if(err) throw err;
    console.log('Saved!');
  });
  fs.unlink('data.log', (err) => {
    if(err) throw err;
    console.log('file deleted');
  });

  fs.readFile('html/index.html', (err, data) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  })
  */
  /*const q = url.parse(req.url, true);
  //console.log(q.host);
  console.log(q.pathname);
  console.log(q.search);
  const data = q.query;
  console.log(data.var);
  res.end();*/

  const q = url.parse(req.url, true);
  const filename = './html' + q.pathname;
  fs.readFile(filename, (err, data) => {
    if(err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data);
  });

});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/\n' + 'Start: ' + date.myDateTime());
});
