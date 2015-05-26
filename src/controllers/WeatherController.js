angular.module("weather").controller("WeatherController", function ($scope, $q, WeatherService, TemperatureService) {
    var controller = this;
    controller.toggleTemperatureUnit = toggleTemperatureUnit;
    controller.data = {};

    $scope.$watch('city', onCityChange);

    var canceller;

    function onCityChange(city) {
        if (canceller) {
            canceller.resolve();
        }
        canceller = $q.defer();
        WeatherService.getLocalWeatherForCity(city, canceller.promise).then(function (data) {
            controller.temperatureUnit = 'C';
            controller.data = data;
        }, function () {
            controller.data = {};
        });
    }

    function toggleTemperatureUnit() {
        controller.temperatureUnit = controller.temperatureUnit === 'C' ? 'F' : 'C';
        if (controller.temperatureUnit === 'C') {
            controller.data.temperature = TemperatureService.convertToCelsius(controller.data.temperature);
        } else {
            controller.data.temperature = TemperatureService.convertToFahrenheit(controller.data.temperature);
        }
    }
});