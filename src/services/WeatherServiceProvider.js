angular.module("weather").provider("WeatherService", function(){
    var apiEndpoint;
    var iconEndpoint;

    return {
        setApiEndpoint: function (endpoint) {
            apiEndpoint = endpoint;
        },
        setIconEndpoint: function(endpoint){
            iconEndpoint = endpoint;
        },
        $get: function ($http) {
            return new WeatherService($http, apiEndpoint, iconEndpoint);
        }
    };

    function WeatherService($http, apiEndpoint, iconEndpoint){
        var service = this;
        service.getLocalWeatherForCity = getLocalWeatherForCity;
        return service;

        function getLocalWeatherForCity(cityName, canceller){
            return $http.get(apiEndpoint + "weather?q=" + cityName, {
                timeout: canceller
            }).then(function(data){
                return {
                    location: data.name,
                    temperature: (parseFloat(data.main.temp) - 273.15).toFixed(2),
                    iconUri: iconEndpoint + data.weather[0].icon + ".png"
                };
            });
        }
    }
});