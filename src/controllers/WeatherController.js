angular.module("weather").controller("WeatherController", function ($scope, $q, WeatherService, TemperatureService) {
    var controller = this;
    controller.toggleTemperatureUnit = toggleTemperatureUnit;

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

    function toggleTemperatureUnit() {
        controller.temperatureUnit = controller.temperatureUnit === 'C' ? 'F' : 'C';
        if (controller.temperatureUnit === 'C') {
            controller.temperature = TemperatureService.convertToCelsius(controller.temperature);
        } else {
            controller.temperature = TemperatureService.convertToFahrenheit(controller.temperature);
        }
    }
});