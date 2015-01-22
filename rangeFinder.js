
//// *****************************************
//
//  Calculates the range using ultraecho range finder
//
var gpio = require("pi-gpio");
var starTime;
var stopTime;
var elapsed;
var distance;


gpio.open(16, "output", function(err) {        // Open pin 16 for output
  console.log('pin 16 ready for output')
});
console.log('debug')
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





var echoLoop = function(direction){

  if(direction == 0){
    gpio.read(16, function(err, value) {
      if(err) throw err;
      starTime = Date.now();
      if(value == 0){
        echoLoop(0)
      }
      else{
        echoLoop(1)
      }
    });
  }
  else{
    gpio.read(16, function(err, value) {
      if(err) throw err;
      stopTime = Date.now();
      if(value == 1){
        echoLoop(1)
      }
      else{
        elapsed = stopTime - starTime;
        distance = elapsed *34000;
        distance = distance/2;
        console.log("Distance :  " + distance)
      }
    });

  }


  // Distance pulse travelled in that time is time
  // multiplied by the speed of sound (cm/s)

}

var pulse = function(){

  gpio.write(16, 1, function(){
  })

  sleep(1)

  gpio.write(16, 0, function(){
    echoLoop(0);
  })
}



gpio.write(16, 0, function(){

  setTimeout( pulse(),
    500)
})
