

var hueClass = function (){

    this.hue = require("node-hue-api"),
    this.HueApi = this.hue.HueApi,
    this.lightState = this.hue.lightState;

    this.displayResult = function(result) {
        console.log(result);
    };

    this.displayError = function(err) {
        console.error(err);
    };

    this.host = "10.0.1.205",
        this.username = "newdeveloper",
        this.api = new this.HueApi(this.host, this.username),
        this.state = this.lightState.create();

    this.state.on().hsl(200, 100, 30)

    // Set the lamp with id '2' to on
    this.api.setLightState(2, this.state)
        .then(this.displayResult)
        .fail(this.displayError)
        .done();

    // Now turn off the lamp
    this.api.setLightState(3, this.state)
        .then(this.displayResult)
        .fail(this.displayError)
        .done();




    this.setState = function(){
        console.log(' updating bulb')
        this.api.setLightState(2, this.state)
            .then(this.displayResult)
            .fail(this.displayError)
            .done();

        // Now turn off the lamp
        this.api.setLightState(3, this.state)
            .then(this.displayResult)
            .fail(this.displayError)
            .done();
    }    


    //  Cycles through all the colors
    //
    this.party = function(){

        for (var i = 0; i < 360; i++) {

                console.log(i);
                this.state.hsl(i,100,20);
                setTimeout(this.setState(), (2000*i));

                
        }
    }

};



var bulb = new hueClass();

bulb.party();
bulb.state.hsl(10,100,10);
bulb.setState();

