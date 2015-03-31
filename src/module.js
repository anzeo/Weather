angular.module("weather", ['ngMaterial']).config(function($httpProvider){
    $httpProvider.interceptors.push('WeatherServiceInterceptor');
});