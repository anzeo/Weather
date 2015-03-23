angular.module("weather").controller("WeatherController", function($scope, WeatherService, $q){
    var controller = this;

    $scope.$watch('city', onCityChange);

    var canceller;
    function onCityChange(city){
        if(canceller){
            canceller.resolve();
        }
        canceller = $q.defer();
        WeatherService.getLocalWeatherForCity(city, canceller.promise).then(function(data){
            controller.data = data;
        }, function(){
            controller.data = undefined;
        });
    }
});