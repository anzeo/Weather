angular.module("weather").controller("WeatherController", function ($scope, $q, WeatherService, TemperatureService) {
    var controller = this;
    controller.showTemperatureIn = showTemperatureIn;

    $scope.$watch('city', onCityChange);

    var canceller;

    function onCityChange(city) {
        if (canceller) {
            canceller.resolve();
        }
        canceller = $q.defer();
        WeatherService.getLocalWeatherForCity(city, canceller.promise).then(function (data) {
            controller.temperatureUnit = 'C';
            controller.temperature = data.temperature;
            controller.location = data.location;
        }, function () {
            controller.temperature = undefined;
            controller.location = undefined;
        });
    }

    function showTemperatureIn(unit) {
        if (unit === 'C') {
            controller.temperature = TemperatureService.convertToCelsius(controller.temperature);
        } else if (unit === 'F') {
            controller.temperature = TemperatureService.convertToFahrenheit(controller.temperature);
        }
    }
});