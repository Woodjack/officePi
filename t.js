


function hueBulbs(){

	this.hue = require("node-hue-api");

	this.ip = "10.0.1.205";
	this.username = "newdeveloper";
	this.api = new this.hue.HueApi(this.ip, this.username);
	this.state = this.hue.lightState.create();



	this.displayResult = function(result) {
	    console.log(result);
	};

	this.displayError = function(err) {
	    console.error(err);
	};

	this.turnOn = function(){
		// Turn each light state on
		console.log('STARTING')

		this.api.setLightState(2, this.state.on())
		    .then(this.displayResult)
		    .fail(this.displayError)
		    .done();
		this.api.setLightState(3, this.state)
		    .then(this.displayResult)
		    .fail(this.displayError)
		    .done();
		console.log('turned on')
	};

	this.turnOff = function(){
		// Turn each light state on
		this.api.setLightState(2, this.state.off())
		    .then(this.displayResult)
		    .fail(this.displayError)
		    .done();
		this.api.setLightState(3, this.state)
		    .then(this.displayResult)
		    .fail(this.displayError)
		    .done();
		console.log('turned off')
	};

	this.print = function(){
		console.log('hi')
	};


};




var bulb = new hueBulbs();

console.log(' bulb created');

//bulb.turnOn();


setTimeout( bulb.turnOff() ,2000);
