'use strict';

var Thermostat = function() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MIN_TEMPERATURE_LIMIT = 10;
  this.MAX_TEMP_POWER_SAVING_ON = 25;
  this.MAX_TEMP_POWER_SAVING_OFF = 32;
  this.powerSaving = true;
};
Thermostat.prototype.getTemperature = function() { return this.temperature; };

Thermostat.prototype.reset = function() { this.temperature = this.DEFAULT_TEMPERATURE; };

Thermostat.prototype.isInPowerSaving = function() {
  return this.powerSaving;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MIN_TEMPERATURE_LIMIT;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isInPowerSaving()) {
    return this.temperature === this.MAX_TEMP_POWER_SAVING_ON;
  } else {
    return this.temperature === this.MAX_TEMP_POWER_SAVING_OFF;
  }
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return 'low-usage';
  } else if (this.temperature < 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};

Thermostat.prototype.togglePowerSaving = function() {
  if (this.isInPowerSaving() === true) {
    this.powerSaving = false;
  } else {
    this.powerSaving = true;
  }
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};
