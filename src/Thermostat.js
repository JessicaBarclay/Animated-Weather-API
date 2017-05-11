'use strict';

var Thermostat = function() {
  this.temperature = 20;
  this.MIN_TEMPERATURE_LIMIT = 10;
};
Thermostat.prototype.getTemperature = function() { return this.temperature; };

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MIN_TEMPERATURE_LIMIT;
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};
Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};
