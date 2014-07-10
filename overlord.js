//   Welcome
//
console.log(' ------- officePI ------- ');
console.log(' **      overlord    ** ');
console.log(' listening: http://localhost:7000');

//  Create a socket.io server object and listen on port 7000 
//
var io = require('socket.io').listen(7000);



io.sockets.on('connection', function (socket) {
 
//  When a socket emit is recieved, then run this function
//
  socket.on('checkIn', function(data) {
    console.log('  -- User checked into overlord: ' + data);
    // Sends message to the connected client
    //
    socket.emit('updateLED', {color:'crazy'});

  });

});







//  THIS IS FOR THE HOME Automation Service
//  
//		LISTENING ON PORT 5000
//		10.0.1.240
//
var homeComputer = require('socket.io').listen(5000);

homeComputer.sockets.on('connection', function (socket) {
 
//  CHECKIN THE USER WHEN THE CONNECT
//
  socket.on('checkIn', function(data) {
    console.log('  -- User checked into HOME COMPUTER: ' + data);
    // Sends message to the connected client
    //

  });

  socket.on('')



});
