//it can run without connection with master
console.log('***JUST FOR FUN***');
var piblaster = require("pi-blaster.js");

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
