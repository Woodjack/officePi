

module.exports  = function (){

    this.hue = require("node-hue-api")
    this.HueApi = this.hue.HueApi
    this.state = this.hue.lightState.create()
    this.partyCounter = 0
    this.host = "10.0.1.205"
    this.username = "newdeveloper"
    this.api = new this.HueApi(this.host, this.username)
    


    this.displayStatus = function(status) {
        console.log(JSON.stringify(status.state.hue, null, 2));
        this.hue = status.state.hue
    };

    this.displayResult = function(result) {
        console.log(result);
    };

    this.displayError = function(err) {
        console.error(err);
    };

 
    //  SETS THE BULB STATE AND THEN UPDATES IT
    //  *** WITH DATA
    //
    this.setbulb = function(data){
        console.log('starting setbulb')
        this.state.hsl( data.hue, data.sat, data.bri) ;
        this.setState();
        console.log('finished changing bulb')
    };
    //  SETS THE BULB STATE AND THEN UPDATES IT
    //  *** WITH DATA
    //
    this.setbulbhsl = function(hue, sat, bri){
        this.state.hsl( hue, sat, bri) ;
        this.setState();
    };

    //this.bob(){
   //     console.log('BOBOBOBOBOBOBOBOB')
   // }


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
    };   


    //  Cycles through all the colors
    //
    this.party = function(){
        console.log('****')
        console.log(' ITS PARTY TIME -----------------')
        this.state.effect('colorloop')
        
        

    };
    //  returns the properties of bulb
    //


    //  INITIALIZER
    //
    //  Turn the bulbs onto a low red
    //
    this.state.on().hsl(200, 100, 100)

    // Set the lamp with id '2' to on
    //
    this.api.setLightState(2, this.state)
        .then(this.displayResult)
        .fail(this.displayError)
        .done();

    // Now turn off the lamp
    //
    this.api.setLightState(3, this.state)
        .then(this.displayResult)
        .fail(this.displayError)
        .done();
    

    this.api.lightStatus(3)
    .then(this.displayStatus)
    .done();


    setTimeout(this.party, 5000)

};

/*
var bulb = new hue();
bulb.state.hsl(10,100,10);
bulb.setState();
*/
