const http = require('http');
const date = require('./date-module');
const url = require('url');
const fs = require('fs');
const events = require('events');


const eventEmitter = new events.EventEmitter();
const rs = fs.createReadStream('./data.log');
const hostname = '127.0.0.1';
const port = 3000;

rs.on('open', () => { console.log('the file is open');});

const myEventHandler = () => console.log('I hear a scream!');
eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');


const server = http.createServer((req, res) => {

});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/\n' + 'Start: ' + date.myDateTime());
});
