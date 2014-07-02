console.log(' ------------------------ ');
console.log(' ------- officePI ------- ');
console.log(' **       minion       ** ');
console.log(' connecting: http://10.0.1.220:7000');


var clientio  = require('socket.io-client');
var client    = clientio.connect('http://localhost:7000');

 
client.on('message', function(data) {
  console.log('message', data);
});

client.emit('checkIn', 'clientName');