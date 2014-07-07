//it can run without connection with master
console.log(' ------------------------ ');
console.log(' ------- officePI ------- ');
console.log(' ** minion ** ');
console.log(' connecting: http://10.0.1.220:7000');


var clientio = require('socket.io-client');
var client = clientio.connect('http://localhost:7000');
var piblaster = require("pi-blaster.js");

client.emit('checkIn', 'clientName');


client.on('message', function(data) {
  console.log('message', data);
});

client.on('updateLED', function(data) {
setTimeout(function () {
setTimeout(function () {
setTimeout(function () {
  debugger;
  console.log("turn off");
    piblaster.setPwm(22, 1);
    piblaster.setPwm(17, 1);
    piblaster.setPwm(4, 1); 
}, 3000);
  debugger;
  console.log("blue");
    piblaster.setPwm(22, 1);
    piblaster.setPwm(17, 0);
    piblaster.setPwm(4, 1); 
}, 3000);
  console.log("green");
    piblaster.setPwm(22, 0);
    piblaster.setPwm(17, 1);
    piblaster.setPwm(4, 1);
}, 3000);
console.log("red");
	piblaster.setPwm(22, 1);
	piblaster.setPwm(17, 1);
	piblaster.setPwm(4, 0);
});
