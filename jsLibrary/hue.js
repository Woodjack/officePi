var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var host = "10.0.1.205",
    username = "newdeveloper",
    api = new HueApi(host, username),
    state= lightState.create();

//  set light state
api.setLightState(3, state.on().brightness(100).rgb(255,0,0))
    .then(displayResult)
    .done();

//  set light state
api.setLightState(2, state)
    .then(displayResult)
    .done();


api.setLightState(3, state.off())
    .then(displayResult)
    .done();


api.setLightState(2, state)
    .then(displayResult)
    .done();


    /*
    LightState Options

The lightState object provides the following methods that can be used to build various states (all of which can be combined);

on()
off()
alert() flash the light once
alert(isLong) if isLong is true then the alert will flash 10 times
white(colorTemp, brightPercent) where colorTemp is a value between 154 (cool) and 500 (warm) and brightPercent is 0 to 100
brightness(percent) where percent is the brightness from 0 to 100
hsl(hue, saturation, brightPercent) where hue is a value from 0 to 359, saturation is a percent value from 0 to 100, and brightPercent is from 0 to 100
xy(x, y) where x and y is from 0 to 1 in the Philips Color co-ordinate system
rgb(red, green, blue) where red, green and blue are values from 0 to 255 - Not all colors can be created by the lights
transition(seconds) this can be used with another setting to create a transition effect (like change brightness over 10 seconds)
effect(value) this can be set to 'colorloop' or 'none'. The 'colorloop' rotates through all available hues at the current saturation level
*/


