console.log(' ------------------------ ');
console.log(' ------- officePI ------- ');
console.log(' ** minionCarlosPi ** ');
console.log(' connecting: http://10.0.1.240:7000');


var clientio = require('socket.io-client');
var client = clientio.connect('http://10.0.1.240:7000');
var piblaster = require("pi-blaster.js");
var count = 0;

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
     count = count + 1;
     if (count === 1){
      console.log('green');
      piblaster.setPwm(22, 0);
      piblaster.setPwm(17, 1);
      piblaster.setPwm(4, 1);
     } else if (count === 2){
      console.log('blue');
      piblaster.setPwm(22, 1);
      piblaster.setPwm(17, 0);
      piblaster.setPwm(4, 1);
     } else if (count === 3){
      console.log('red');
      piblaster.setPwm(22, 1);
      piblaster.setPwm(17, 1);
      piblaster.setPwm(4, 0);
      count = 0;
     }
     else{
      console.log('out of time');
      count = 0;
     }
    }, 3000);
  } else if ( data.color === 'crazier' ){
    setInterval(function(){
     if (count === 1){
       count = 0;
     }
     else {
       count = count + 0.001;
     }
     console.log(count)
    }, 1);
  } else {
    console.log('I do not know this color');
  };
});
