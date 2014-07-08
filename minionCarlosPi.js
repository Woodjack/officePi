console.log(' ------------------------ ');
console.log(' ------- officePI ------- ');
console.log(' ** minionCarlosPi ** ');
console.log(' connecting: http://10.0.1.240:7000');


var clientio = require('socket.io-client');
var client = clientio.connect('http://10.0.1.240:7000');
var piblaster = require("pi-blaster.js");

client.emit('checkIn', 'clientName');


client.on('message', function(data) {
  console.log('message', data);
});

client.on('updateLED', function(data) {
    
  //console.log('function: ', function(data));
  if ( data.color === 'red' ){//Faltaban los 3 iguales
    piblaster.setPwm(22, 1);
    piblaster.setPwm(17, 1);
    piblaster.setPwm(4, 0);
  } else if ( data.color === 'green' ){
    piblaster.setPwm(22, 0);
    piblaster.setPwm(17, 1);
    piblaster.setPwm(4, 1);
  } else if ( data.color === 'blue' ){
    piblaster.setPwm(22, 1);
    piblaster.setPwm(17, 0);
    piblaster.setPwm(4, 1);
  } else if ( data.color === 'crazy' ){
     setInterval(function(){
      blaster.setPwm(22, 0);
      blaster.setPwm(17, 0);
      blaster.setPwm(4, 0);
      }, 3000);
  } else {
    console.log('I do not know this color');
  };
});
