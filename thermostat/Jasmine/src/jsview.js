window.onload = function() {
  $('#temperature').text('Thermostat');
};

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature + 'degrees.');
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $('#temp-up').click(function() {
    // alert("Temperature Up")
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('Power Saving On')
    updateTemperature();
  });

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('Power Saving Off')
    updateTemperature();
  });

});
