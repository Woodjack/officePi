
//// *****************************************
//
//  Calculates the range using ultrasonic range finder
//


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





var gpio = require("pi-gpio");

gpio.open(16, "output", function(err) {        // Open pin 16 for output
  console.log('pin 16 ready for output')
});

gpio.open(18, "input", function(err) {        // Open pin 16 for output
  console.log('pin 18 ready for input')
});



gpio.read(16, function(err, value) {
  if(err) throw err;
  console.log(value);    // The current state of the pin
});

var pulse = function(){

  gpio.write(16, 1, function(){

    setTimeout( pulse(),
    500)
  })

  # Send 10us pulse to trigger
  GPIO.output(GPIO_TRIGGER, True)
  time.sleep(0.00001)
  GPIO.output(GPIO_TRIGGER, False)
  start = time.time()
  while GPIO.input(GPIO_ECHO)==0:
  start = time.time()

  while GPIO.input(GPIO_ECHO)==1:
  stop = time.time()

  # Calculate pulse length
  elapsed = stop-start

  # Distance pulse travelled in that time is time
  # multiplied by the speed of sound (cm/s)
  distance = elapsed * 34000

  # That was the distance there and back so halve the value
  distance = distance / 2

  print "Distance : %.1f" % distance

}




gpio.write(16, 0, function(){

  setTimeout( pulse(),
    500)
})



# Set trigger to False (Low)
GPIO.output(GPIO_TRIGGER, False)

# Allow module to settle
time.sleep(0.5)

# Send 10us pulse to trigger
GPIO.output(GPIO_TRIGGER, True)
time.sleep(0.00001)
GPIO.output(GPIO_TRIGGER, False)
start = time.time()
while GPIO.input(GPIO_ECHO)==0:
start = time.time()

while GPIO.input(GPIO_ECHO)==1:
stop = time.time()

# Calculate pulse length
elapsed = stop-start

# Distance pulse travelled in that time is time
# multiplied by the speed of sound (cm/s)
distance = elapsed * 34000

# That was the distance there and back so halve the value
distance = distance / 2

print "Distance : %.1f" % distance
