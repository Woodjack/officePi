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
  var huejs = require('./jsLibrary/hue');
  var newhue = new huejs();
  newhue.setbulb(5,100,10);
  //
  //  CHECKIN THE USER WHEN THE CONNECT
  //
  socket.on('check in', function(data) {
    console.log('  -- User checked into HOME COMPUTER: ');
    console.log(data);
    //hue.hue.setbulb(10,100,80);


    console.log('party time ')

    
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
      newhue.setbulb(10,100,80)
        
    } else if (data.match('justin')) {
        console.log('JUSTIN WINS! ')
        newhue.setbulb(100,100,80)   
    }
    else if (data.match('ben')) {
        console.log('ben is a mechwarrior! ')
        newhue.setbulb(240,100,100)   
    }
    else if (data.match('armante')) {
        console.log('armante WINS! ')
        newhue.setbulb(50,100,80)   
    }
    else if (data.match('carlos')) {
        console.log('carlos WINS! ')
        newhue.setbulb(150,100,80)   
    }
    else if (data.match('bright')) {
        console.log(' make it brighter ')
        newhue.setbulb(150,100,80)   
    }
    else if (data.match('off')) {
        console.log('  TURNING OFF! ')
        newhue.setbulb(100,100,0)   
    }
    else if (data.match('party')) {
        console.log('party time ')
        for (var i = 0; i < 360; i++) {
          console.log(i)
          setTimeout(function(){
            console.log(i)
            newhue.setbulb(i,100,70)
          },
          (4000*i));
        };
           
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
var webdir = __dirname + '/web'
connect().use(serveStatic(webdir)).listen(8080);

console.log(webdir)
console.log('listenting on port 8080 for NODE-STATIC')

//
//
//  PRINTS THE SERVER IP ADDRESS
//
//
var os=require('os');
var ifaces=os.networkInterfaces();
for (var dev in ifaces) {
  var alias=0;
  ifaces[dev].forEach(function(details){
    if (details.family=='IPv4') {
      console.log(dev+(alias?':'+alias:''),details.address);
      ++alias;
    }
  });
}



