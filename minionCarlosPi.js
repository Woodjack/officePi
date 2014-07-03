var piblaster = require("pi-blaster.js");

// Set first pin at 40%
piblaster.setPwm(7, 0.4);

// Set second pin at 100%
piblaster.setPwm(14, 0.2);
