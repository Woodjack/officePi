//   Welcome
//
console.log(' ------- officePI ------- ');
console.log(' **      overlord    ** ');
console.log(' listening: http://localhost:7000');

//  Create a socket.io server object and listen on port 7000 
//
var io = require('socket.io').listen(7000);




var hue = require('hue.js');

console.log('line 13')
console.log(hue.turnOn);
//console.log(hue.turnOff);

 








io.sockets.on('connection', function (socket) {
 
//  When a socket emit is recieved, then run this function
//
  socket.on('checkIn', function(data) {
    console.log('  -- User checked in: ' + data);
    // Sends message to the connected client
    //
    socket.emit('updateLED', {color:'blue'});

  });

});
