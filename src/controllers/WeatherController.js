angular.module("weather").controller("WeatherController", function($scope, $q, WeatherService, TemperatureService){
    var controller = this;
    controller.temperatureUnit = 'C';
    controller.showTemperatureIn = showTemperatureIn;

    $scope.$watch('city', onCityChange);

    var canceller;
    function onCityChange(city){
        if(canceller){
            canceller.resolve();
        }
        canceller = $q.defer();
        WeatherService.getLocalWeatherForCity(city, canceller.promise).then(function(data){
            controller.temperature = (parseFloat(data.main.temp) - 273.15).toFixed(2);
            controller.location = data.name;
        }, function(){
            controller.temperature = undefined;
            controller.location = undefined;
        });
    }

    function showTemperatureIn(unit){
        if(unit === 'C'){
            controller.temperature = TemperatureService.convertToCelsius(controller.temperature);
        } else if(unit === 'F'){
            controller.temperature = TemperatureService.convertToFahrenheit(controller.temperature);
        }
    }
});