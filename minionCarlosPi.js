var piblaster = require("pi-blaster.js");

// Set first pin at 40%
piblaster.setPwm(22, 0.4);

// Set second pin at 100%
piblaster.setPwm(4, 1);
