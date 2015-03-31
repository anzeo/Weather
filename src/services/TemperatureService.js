angular.module('weather').service("TemperatureService", function(){
    var service = this;
    service.convertToFahrenheit = convertToFahrenheit;
    service.convertToCelsius = convertToCelsius;
    return service;

    function convertToFahrenheit(temperature){
        return (temperature * 1.8 + 32).toFixed(2);
    }

    function convertToCelsius(temperature){
        return ((temperature - 32) / 1.8).toFixed(2);
    }
});