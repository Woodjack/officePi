/*
 * hue.js
 */

// Private
var hue = require("node-hue-api")
var HueApi = hue.HueApi
var state = hue.lightState.create()
var partyCounter = 0
var host =  "10.0.1.205"
var username ="newdeveloper"
var api = new HueApi(host, username)
var lightSwitch = false







function displayStatusf(status)
{
    console.log(JSON.stringify(status.state.hue, null, 2));
};

function displayResult(result)
{
    console.log(result);
}

function displayError(err)
{
    console.error(err);
}




// Public
var self = module.exports = {

  someProperty: 'I am public variable most def',


  // TURN ON THE BULB
  //
  turnOn: function()
  {
      state.on();
      api.setLightState(2,state).then(displayResult).fail(displayError).done();
      api.setLightState(3,state).then(displayResult).fail(displayError).done();

  },

  turnOff: function()
  {
      state.off();
      api.setLightState(2,state).then(displayResult).fail(displayError).done();
      api.setLightState(3,state).then(displayResult).fail(displayError).done();

  },

  party: function()
  {
    if(partyCounter == 0)
      {
        console.log('  -- starting party mode!');
        state.effect('colorloop');
        api.setLightState(2,state).then(displayResult).fail(displayError).done();
        api.setLightState(3,state).then(displayResult).fail(displayError).done();
        partyCounter = 1;
      }
    else
      {
        console.log('  --THE PARTY IS ALREADY GOING!')
      }

  },

  noParty: function()
  {
    if(partyCounter == 1)
      {
        console.log('  -- stoping party mode!');
        state.effect('none');
        api.setLightState(2,state).then(displayResult).fail(displayError).done();
        api.setLightState(3,state).then(displayResult).fail(displayError).done();
        partyCounter = 0
      }
    else
      {
        console.log('  --The party is already over.... so sad')
      }
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
