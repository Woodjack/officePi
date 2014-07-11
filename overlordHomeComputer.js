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
  var huejs = require('./hue');
  var newhue = new huejs();
  newhue.setbulb(5,100,10);
  //
  //  CHECKIN THE USER WHEN THE CONNECT
  //
  socket.on('check in', function(data) {
    console.log('  -- User checked into HOME COMPUTER: ');
    console.log(data);
    //hue.hue.setbulb(10,100,80);
  });
  //
  //  VOICE COMMAND
  //
  socket.on('voice command', function(data) {
  	console.log( ' -- user sent a voice command' );
    data = data.toLowerCase();
    console.log( data );
    //
    //  hue.hue.setbulb(200,100,30);
    //
    if (data.match('jack')) {
      console.log('  THEY SAID JACK!!!! ')
        
    } else if (data.match('justin')) {
        console.log('JUSTIN WINS! ')
        newhue.setbulb(100,100,80)   
    }
  });
});



//  THIS IS FOR THE HOME Automation Service
//
//		HTTP FILES
//  
//		LISTENING ON PORT 80
//		10.0.1.240
//
var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);

console.log('listenting on port 8080 for NODE-STATIC')



