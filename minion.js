console.log(' ------------------------ ');
console.log(' ------- officePI ------- ');
console.log(' **      THE CLIENT    ** ');
console.log(' connecting: http://10.0.1.220:7000');


var clientio  = require('socket.io-client');
var client    = clientio.connect('http://localhost:7000');

 
client.on('doSomething', function(data) {
  console.log('PONG', data);
});

client.emit('checkIn',1);