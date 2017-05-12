(function() {
  'use strict';
  $(document).ready(function() {
    var thermostat = new Thermostat();
    updateThermostatDisplay();
    getWeatherData();

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
      
    function getWeatherData() {
      $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=ca6621a185dacb0bdc5c58b83638da59', function(data){
	$('#weather_data').text((data.name).concat(": ").concat(Math.round(data.main.temp)));
      });
    }
  });
}());
