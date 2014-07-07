

var hueClass = function (){
    console.log('checkpoint');
    var hue = require("node-hue-api");
    var myHueApi = this.hue.HueApi;
    var mylightState = this.hue.lightState;
    var hueIP = "10.0.1.205";
    var username = "newdeveloper";
    var api = new this.myHueApi(this.hueIP, this.username);
    var state= this.mylightState.create();

    this.displayResult = function(result) {
        console.log(JSON.stringify(result, null, 2));
    };

    
};

var bulb = new hueClass();

/*
    hue.turnOn = function (){
        console.log(' line 17');
        //  set light state
        this.api.setLightState(3, state.on().brightness(100).rgb(255,0,0))
            .then(displayResult)
            .done();

        //  set light state
        this.api.setLightState(2, state)
            .then(displayResult)
            .done();

        console.log(' finished turning on!');
        return('it turned on');
    };

    hue.turnOff = function (){
        this.api.setLightState(3, this.state.off())
            .then(this.displayResult)
            .done();


        this.api.setLightState(2, this.state)
            .then(this.displayResult)
            .done();
    };
};


bulb.turnOn();
*/