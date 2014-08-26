
//// *****************************************
//
//   Welcome
//
console.log(' ------- officePI ------- ');
console.log(' **      overlord    ** ');
console.log(' listening: http://localhost:7000');



// *****************************************
//
//  THIS IS FOR THE HOME Automation Service
//
//		LISTENING ON PORT 5000
//		10.0.1.240
//
var homeComputer = require('socket.io').listen(5555);

//
//
//
homeComputer.sockets.on('connection', function (socket) {
  var newhue = require('./jsLibrary/hue');
  newhue.setBulb(5,100,10);

  //
  //  CHECKIN THE USER WHEN THE CONNECT
  //
  socket.on('check in', function(data) {
    console.log('  -- User checked into HOME COMPUTER: ');
    console.log(data);

    });

  //
  //  CHECKIN THE USER WHEN THE CONNECT
  //
  socket.on('update bulb', function(data) {
    console.log('  -- User updating bulb: ');
    console.log(data);
    newhue.setBulb(data);


    });


  //
  //  VOICE COMMAND
  //
  socket.on('voice command', function(data) {
  	console.log( '******* user sent a voice command' );
    data = data.toLowerCase();
    console.log( data );
    //
    //  hue.hue.setBulb(200,100,30);
    //
    if (data.match('jack')) {
      console.log('  THEY SAID JACK!!!! ')
      newhue.setBulb(10,100,80)

    } else if (data.match('justin')) {
        console.log('JUSTIN WINS! ')
        newhue.setBulb(330,100,90)
    }
    else if (data.match('ben')) {
        console.log('ben is a mechwarrior! ')
        newhue.setBulb(240,100,100)
    }
    else if (data.match('armante')) {
        console.log('armante WINS! ')
        newhue.setBulb(50,100,80)
    }
    else if (data.match('carlos')) {
        console.log('carlos WINS! ')
        newhue.setBulb(150,100,80)
    }
    else if (data.match('bright')) {
        console.log(' make it brighter ')
        newhue.setBulb(150,100,80)
    }
    else if (data.match('start the party')) {
        console.log('party time ')
        newhue.party();
    }
    else if (data.match('stop the party')) {
        console.log('party time is OVER')
        newhue.noParty();
    }
    else if (data.match('on')) {
        console.log('party time ')
        newhue.turnOn();
    }
    else if (data.match('off')) {
        console.log('party time ')
        newhue.turnOff();
    }
    else if (data.match('blue')) {
        console.log('blue ')
        newhue.setBulb(250,100,80)
    }
    else if (data.match('red')) {
        console.log('red ')
        newhue.setBulb(0,100,80)
    }
    else if (data.match('white')) {
        console.log('white ')
        newhue.setBulb(180,100,80)
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
connect().use(serveStatic(webdir)).listen(8888);

console.log(webdir)
console.log('listenting on port 8888 for NODE-STATIC')


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
