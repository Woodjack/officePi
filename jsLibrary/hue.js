var hue = require("node-hue-api")
var HueApi = ueApi
var state = hue.lightState.create()
var partyCounter = 0
var host = "10.0.1.205"
var username = "newdeveloper"
var api = new HueApi(host, username)

module.exports hue: {  
    


    displayStatus: function(status) {
        console.log(JSON.stringify(status.state.hue, null, 2));
        hue: status.state.hue
    };

    displayResult: function(result) {
        console.log(result);
    };

    displayError: function(err) {
        console.error(err);
    };

 
    //  SETS THE BULB STATE AND THEN UPDATES IT
    //  *** WITH DATA
    //
    setbulb: function(data){
        console.log('starting setbulb')
        state.hsl( data.hue, data.sat, data.bri) ;
        setState();
        console.log('finished changing bulb')
    };
    //  SETS THE BULB STATE AND THEN UPDATES IT
    //  *** WITH DATA
    //
    setbulbhsl: function(hue, sat, bri){
        state.hsl( hue, sat, bri) ;
        setState();
    };

    //bob(){
   //     console.log('BOBOBOBOBOBOBOBOB')
   // }


    setState: function(){
        console.log(' updating bulb')
        api.setLightState(2, state)
            .then(displayResult)
            .fail(displayError)
            .done();

        // Now turn off the lamp
        api.setLightState(3, state)
            .then(displayResult)
            .fail(displayError)
            .done();
    };   


    //  Cycles through all the colors
    //
    party: function(){
        console.log('****')
        console.log(' ITS PARTY TIME -----------------')
        state.on().effect('colorloop')
        
        

    };
    //  returns the properties of bulb
    //


    //  INITIALIZER
    //
    //  Turn the bulbs onto a low red
    //
    state.on().hsl(200, 100, 100)

    // Set the lamp with id '2' to on
    //
    api.setLightState(2, state)
        .then(displayResult)
        .fail(displayError)
        .done();

    // Now turn off the lamp
    //
    api.setLightState(3, state)
        .then(displayResult)
        .fail(displayError)
        .done();
    

    api.lightStatus(3)
    .then(displayStatus)
    .done();

};

