console.log(' ------------------------ ');
console.log(' ------- officePI ------- ');
console.log(' **      THE SERVER    ** ');
console.log(' listening: http://localhost:7000');

var io = require('socket.io').listen(7000);
 
io.sockets.on('connection', function (socket) {
  
  socket.on('checkIn', function(data) {
    console.log('  -- User checked in: ' + data);
    socket.emit('pong', 'Justin Rocks');
  });
});