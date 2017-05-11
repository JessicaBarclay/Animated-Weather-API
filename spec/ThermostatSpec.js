'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {

    thermostat= new Thermostat();

  });

  it('has a default starting temp of 20', function() {
    expect(thermostat.getTemperature()).toBe(20);
  });

});
