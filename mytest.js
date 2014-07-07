//it can run without connection with master
console.log('***JUST FOR FUN***');
var piblaster = require("pi-blaster.js");
var a = 2;

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
