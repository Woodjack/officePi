
console.log(' ------------------------ ');
console.log(' ------- officePI ------- ');
console.log(' ** minion ** ');
console.log(' connecting: http://10.0.1.220:7000');


var clientio = require('socket.io-client');
var client = clientio.connect('http://localhost:7000');

client.emit('checkIn', 'clientName');


client.on('message', function(data) {
  console.log('message', data);
});


client.on('updateLED', function(data) {
var piblaster = require("pi-blaster.js");
    
  console.log('  -- chaging LED to: ', data);
  if( data == "red" ){
    piblaster.setPwm(22, 1);
    piblaster.setPwm(17, 1);
    piblaster.setPwm(4, 0);
  }
  else if( data == "green" ){
    piblaster.setPwm(22, 0);
    piblaster.setPwm(17, 1);
    piblaster.setPwm(4, 1);
  }
  else{
    piblaster.setPwm(22, 1);
    piblaster.setPwm(17, 0);
    piblaster.setPwm(4, 1);    
  }
};
