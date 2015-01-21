
//// *****************************************
//
//  Calculates the range using ultrasonic range finder
//
var gpio = require("pi-gpio");

gpio.open(16, "output", function(err) {        // Open pin 16 for output
  console.log('pin 16 ready for output')
});

gpio.open(18, "input", function(err) {        // Open pin 16 for output
  console.log('pin 18 ready for input')
});


// sleep function
//
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}





gpio.read(16, function(err, value) {
  if(err) throw err;
  console.log(value);    // The current state of the pin
});

var pulse = function(){

  gpio.write(16, 1, function(){

  })

  time.sleep(1)

  gpio.write(16, 1, function(){

  })

  var starTime = Date.now();
  var stopTime;

  while(true){
    gpio.read(16, function(err, value) {
      if(err) throw err;
      starTime = Date.now();
      if(value == 1){break;} 
    });
  }

  while(true){
    gpio.read(16, function(err, value){
      if(err) throw err;
      stopTime = Date.now();
      if(value == 0) {break;}
    })
  }

  var elapsed = stopTime-startTime;

  // Distance pulse travelled in that time is time
  // multiplied by the speed of sound (cm/s)
  var distance = elapsed *34000;
  distance = distance/2;

  console.log("Distance :  " + distance)
}


gpio.write(16, 0, function(){

  setTimeout( pulse(),
    500)
})
