(function() {
  'use strict';
  $(document).ready(function() {
    var thermostat = new Thermostat();
    updateThermostatDisplay();

    $("a#up").click(function(event) {
      thermostat.up();
      updateThermostatDisplay();
    });
    $("a#down").click(function(event) {
      thermostat.down();
      updateThermostatDisplay();
    });
    $("a#reset").click(function(event) {
      thermostat.reset();
      updateThermostatDisplay();
    });

    $("a#power_saving_toggle").click(function(event) {
      thermostat.togglePowerSaving();

      if (thermostat.isInPowerSaving()) {
        $("#power_saving_toggle").text("On");
	updateThermostatDisplay();
      } else {
        $("#power_saving_toggle").text("Off");
      }

    });

    function updateThermostatDisplay() {
      $("#temperature_display").text(thermostat.getTemperature());
      $("#power_usage").text(thermostat.energyUsage());
      $('#temperature_display').attr('class', thermostat.energyUsage());
    }
      
      
  });
}());
