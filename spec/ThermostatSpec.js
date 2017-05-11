(function() {
  'use strict';

  describe('Thermostat', function() {

    var thermostat;

    beforeEach(function() {
      thermostat= new Thermostat();
    });

    it('has a default starting temp of 20', function() {
      expect(thermostat.getTemperature()).toBe(20);
    });

    it('can increase the temperature with an up function', function() {
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(21);
    });

    it('can decrease the temperature with a down function', function() {
      thermostat.down();
      expect(thermostat.getTemperature()).toBe(19);
    });

    it('has a minimum temperature of 10', function() {
      for (var t = 20; t > 9; t--) {
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toBe(10);
    });

  });
}());
