angular.module("weather").controller("WeatherController", function($scope, WeatherService){
    var controller = this;

    $scope.$watch('city', onCityChange);

    function onCityChange(city){
        WeatherService.getLocalWeatherForCity(city).then(function(data){
            controller.data = data;
        }, function(){
            controller.data = undefined;
        });
    }
});