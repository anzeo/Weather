angular.module("weather", []).config(function($httpProvider){
    $httpProvider.interceptors.push('WeatherServiceInterceptor');
});