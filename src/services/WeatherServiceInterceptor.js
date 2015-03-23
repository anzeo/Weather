angular.module("weather").factory("WeatherServiceInterceptor", function($q){
    return {
        response: function (response) {
            if(response){
                return response.data.cod === 200 ? response.data : $q.reject(response);
            }
            return $q.when(response);
        }
    };
});