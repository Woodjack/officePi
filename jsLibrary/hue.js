

module.exports  = function (){

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

 
    //  SETS THE BULB STATE AND THEN UPDATES IT
    //  *** WITH DATA
    //
    this.setbulb = function(data){
        console.log('starting setbulb')
        this.state.hsl( data.hue, data.sat, data.bri) ;
        this.setState();
        console.log('finished changing bulb')
    }
    //  SETS THE BULB STATE AND THEN UPDATES IT
    //  *** WITH DATA
    //
    this.setbulbhsl = function(hue, sat, bri){
        this.state.hsl( hue, sat, bri) ;
        this.setState();
    }

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
        consol.log(' ITS PARTY TIME -----------------')
        var sleepTime = 0

        for (var i = 0; i < 360; i++) {

                
                //this.state.hsl(i,100,20);
                sleepTime = 300 * i;
                console(sleepTime)
                setTimeout(function(){console.log(i)}, sleepTime);

                
        }
    };
    //  returns the properties of bulb
    //
    this.properties = function(){
        var sleepTime = 0

        for (var i = 0; i < 360; i++) {

                console.log(i);
                this.state.hsl(i,100,20);
                sleepTime = 300 * i;
                setTimeout(function(){this.setState}, sleepTime);

                
        }
    };    



    //  INITIALIZER
    //
    //  Turn the bulbs onto a low red
    //
    this.state.on().hsl(200, 100, 20)

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

};

/*
var bulb = new hue();
bulb.state.hsl(10,100,10);
bulb.setState();
*/
