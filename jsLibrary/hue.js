/*
 * hue.js
 */

// Private
var hue = require("node-hue-api")
var HueApi = hue.HueApi
var state = hue.lightState.create()
var host =  "10.0.1.205"
var username ="newdeveloper"
var api = new HueApi(host, username)
var lightSwitch = false







function displayStatus(status)
{
  //console.log(status)
    //console.log(JSON.stringify(status.state.hue, null, 2));
};

function displayResult(result)
{
    console.log(result);
}

function displayError(err)
{
    console.error(err);
}

var partyCounter = 0;

api.lightStatus(3)
    .then(function(status)
    {
      var effect = status.state.effect
      console.log(effect)
      console.log(typeof effect)
      if(effect == "none"){
        console.log('STATUS - party is currently off')
        partCounter = 0;
      }
      else{
        console.log('STATUS - party is currently on')
        partyCounter = 1;
      }
      console.log(partyCounter)

    })
    .done();



// Public
var self = module.exports = {

  someProperty: 'I am public variable most def',


  // TURN ON THE BULB
  //
  turnOn: function()
  {
      state = hue.lightState.create().on();
      api.setLightState(2,state).then(displayResult).fail(displayError).done();
      api.setLightState(3,state).then(displayResult).fail(displayError).done();
      lightSwitch = true

  },

  turnOff: function()
  {
      state = hue.lightState.create().off();
      api.setLightState(2,state).then(displayResult).fail(displayError).done();
      api.setLightState(3,state).then(displayResult).fail(displayError).done();
      lightSwitch = false

  },
  brightBulb: function()
  {
      state = hue.lightState.create().brightness(90);
      api.setLightState(2,state).then(displayResult).fail(displayError).done();
      api.setLightState(3,state).then(displayResult).fail(displayError).done();
      lightSwitch = false

  },
  dimBulb: function()
  {
      state = hue.lightState.create().brightness(15);
      api.setLightState(2,state).then(displayResult).fail(displayError).done();
      api.setLightState(3,state).then(displayResult).fail(displayError).done();
      lightSwitch = false

  },

  party: function()
  {
    state = hue.lightState.create().effect('colorloop');
    api.setLightState(2,state).then(displayResult).fail(displayError).done();
    api.setLightState(3,state).then(displayResult).fail(displayError).done();
    partyCounter = 1;
  },

  noParty: function()
  {
      console.log('  -- stoping party mode!');
      state = hue.lightState.create().effect('none');
      api.setLightState(2,state).then(displayResult).fail(displayError).done();
      api.setLightState(3,state).then(displayResult).fail(displayError).done();
      partyCounter = 0

  },

  setBulb: function(hue, sat, bri)
  {
    // where hue is a value from 0 to 359,
    //  saturation is a percent value from 0 to 100,
    //   and brightPercent is from 0 to 100
    //
    console.log('SET color to');
    console.log(' hue: ' + hue.toString())
    console.log(' sat: ' + sat.toString())
    console.log(' bri: ' + bri.toString())


    if(lightSwitch == false)
    {
      self.turnOn;
      lightSwitch = true;
      console.log('bulb on');
    }

    state.hsl(hue, sat, bri);
    api.setLightState(2,state).then(displayResult).fail(displayError).done();
    api.setLightState(3,state).then(displayResult).fail(displayError).done();
  }
};
