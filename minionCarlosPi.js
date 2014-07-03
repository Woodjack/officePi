var piblaster = require("pi-blaster.js");

// Set first pin at 40%
piblaster.setPwm(22, 1);

// Set second pin at 100%
piblaster.setPwm(17, 1);

piblaster.setPwm(4, 0.2);
