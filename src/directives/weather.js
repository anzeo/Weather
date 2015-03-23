angular.module("weather").directive("weather", function(){
   return {
       restrict: 'AE',
       scope: {
           city: "="
       },
       controller: 'WeatherController',
       controllerAs: 'WeatherController',
       templateUrl: 'src/views/weather.html'
   }
});