angular.module("weather").controller("WeatherController", function(WeatherService){

    WeatherService.getLocalWeatherForCity("Brussels").then(function(data){
        console.log(data);
    });
});