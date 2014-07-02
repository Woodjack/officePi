//   Welcome
//
console.log(' ------------------------ ');
console.log(' ------- officePI ------- ');
console.log(' **       minion       ** ');
console.log(' connecting: http://10.0.1.220:7000');

//  Create a socket.io client object and connect to overlord ip  
//
var clientio  = require('socket.io-client');
var client    = clientio.connect('http://10.0.1.240:7000');

//  Emits message to overlord to checkin with comp name
//
client.emit('checkIn', 'minionCarlos-Pi');


//********************
//  MESSAGE HANDLERS

//  On message updateLED, change LEd to the color in the data json object
//
client.on('updateLED', function(data) {
  console.log('  -- chaging LED to: ', data);
  
  //  ********
  // Carlos will add function to make the LED change to the color
  //
});