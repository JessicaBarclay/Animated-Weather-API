(function() {
  'use strict';
  $(document).ready(function() {
    var thermostat = new Thermostat();

    $("a#up").click(function(event) {
      thermostat.up();
      $("#temperature_display").text(thermostat.getTemperature());
      $("#power_usage").text(thermostat.energyUsage());
    });
    $("a#down").click(function(event) {
      thermostat.down();
      $("#temperature_display").text(thermostat.getTemperature());
      $("#power_usage").text(thermostat.energyUsage());
    });
    $("a#reset").click(function(event) {
      thermostat.reset();
      $("#temperature_display").text(thermostat.getTemperature());
      $("#power_usage").text(thermostat.energyUsage());
    });
    $("a#power_saving_toggle").click(function(event) {
      thermostat.togglePowerSaving();
      if (thermostat.isInPowerSaving()) {
        $("#power_saving_toggle").text("On");
      } else {
        $("#power_saving_toggle").text("Off");
      }
    });
  });
}());
