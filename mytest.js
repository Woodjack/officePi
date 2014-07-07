//it can run without connection with master
console.log('***JUST FOR FUN***');
var piblaster = require("pi-blaster.js");
var a = "red";

//  console.log("turn off");
//    piblaster.setPwm(22, 1);
//    piblaster.setPwm(17, 1);
//    piblaster.setPwm(4, 1);

//  console.log("blue");
//    piblaster.setPwm(22, 1);
//    piblaster.setPwm(17, 0);
//    piblaster.setPwm(4, 1);
if (a==="green"){
  console.log("green");
    piblaster.setPwm(22, 0);
    piblaster.setPwm(17, 1);
    piblaster.setPwm(4, 1);
}
else if (a==="red"){
  console.log("red");
    piblaster.setPwm(22, 1);
    piblaster.setPwm(17, 1);
    piblaster.setPwm(4, 0);
}
else {
  console.log("blue");
    piblaster.setPwm(22, 1);
    piblaster.setPwm(17, 0);
    piblaster.setPwm(4, 1);
}
