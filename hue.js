
function hue(){

    this.hue = require("node-hue-api"),
    this.HueApi = this.hue.HueApi,
    this.lightState = this.hue.lightState,    
    this.host = "10.0.1.205",
    this.username = "newdeveloper",
    this.api = new this.HueApi(this.hueIP, this.username),
    this.state= this.lightState.create();

    this.displayResult = function(result) {
        console.log(JSON.stringify(result, null, 2));
    };

    this.turnOn = function turnOn(){
        console.log(' line 17')
        //  set light state
        api.setLightState(3, state.on().brightness(100).rgb(255,0,0))
            .then(displayResult)
            .done();

        //  set light state
        api.setLightState(2, state)
            .then(displayResult)
            .done();

        console.log(' finished turning on!')
        return('it turned on');
    };

    this.turnOff = function turnOff(){
        this.api.setLightState(3, this.state.off())
            .then(this.displayResult)
            .done();


        this.api.setLightState(2, this.state)
            .then(this.displayResult)
            .done();
    };
};

var bulb = new hue();
bulb.turnOff();


s






