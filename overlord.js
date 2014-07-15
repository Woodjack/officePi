
//// *****************************************
//
//   Welcome
//
console.log(' ------- officePI ------- ');
console.log(' **      overlord    ** ');
console.log(' listening: http://localhost:7000');



// *****************************************
//
//   SET UP SOCKET.IO
//  Create a socket.io server object and listen on port 7000 
//
var io = require('socket.io').listen(7000);




// *****************************************
//
//  THIS IS FOR THE HOME Automation Service
//  
//		LISTENING ON PORT 5000
//		10.0.1.240
//
var homeComputer = require('socket.io').listen(5000);

//
//
//
homeComputer.sockets.on('connection', function (socket) {
  var huejs = require('./jsLibrary/hue');
  var newhue = new huejs();
  newhue.setbulbhsl(5,100,10);
  //
  //  CHECKIN THE USER WHEN THE CONNECT
  //
  socket.on('check in', function(data) {
    console.log('  -- User checked into HOME COMPUTER: ');
    console.log(data);
    newhue.party;
    
    });

  //
  //  CHECKIN THE USER WHEN THE CONNECT
  //
  socket.on('update bulb', function(data) {
    console.log('  -- User updating bulb: ');
    console.log(data);
    newhue.setbulb(data);

    
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
      newhue.setbulbhsl(10,100,80)
        
    } else if (data.match('justin')) {
        console.log('JUSTIN WINS! ')
        newhue.setbulbhsl(100,100,80)   
    }
    else if (data.match('ben')) {
        console.log('ben is a mechwarrior! ')
        newhue.setbulbhsl(240,100,100)   
    }
    else if (data.match('armante')) {
        console.log('armante WINS! ')
        newhue.setbulbhsl(50,100,80)   
    }
    else if (data.match('carlos')) {
        console.log('carlos WINS! ')
        newhue.setbulbhsl(150,100,80)   
    }
    else if (data.match('bright')) {
        console.log(' make it brighter ')
        newhue.setbulbhsl(150,100,80)   
    }
    else if (data.match('off')) {
        console.log('  TURNING OFF! ')
        newhue.setbulbhsl(100,100,0)   
    }
    else if (data.match('party')) {
        console.log('party time ')
        newhue.party;
        };   
    });
});








// *****************************************
//
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

//**************************************



