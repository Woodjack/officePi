//it can run without connection with master
console.log('***JUST FOR FUN***');
var piblaster = require("pi-blaster.js");
<<<<<<< HEAD
var a = 1;
=======
var a = 0;
>>>>>>> 8931f08b5888f7f095a2e0250f1e3a8b3c336873

//  console.log("turn off");
//    piblaster.setPwm(22, 1);
//    piblaster.setPwm(17, 1);
//    piblaster.setPwm(4, 1);

//  console.log("blue");
//    piblaster.setPwm(22, 1);
//    piblaster.setPwm(17, 0);
//    piblaster.setPwm(4, 1);
if (a===1){
  console.log("green");
    piblaster.setPwm(22, 0);
    piblaster.setPwm(17, 1);
    piblaster.setPwm(4, 1);
}
else {
  console.log("red");
    piblaster.setPwm(22, 1);
    piblaster.setPwm(17, 1);
    piblaster.setPwm(4, 0);
}
