angular.module("weather").factory("WeatherServiceInterceptor", function($q){
    return {
        response: function (response) {
            if(response){
                if(response.data.cod) {
                    return response.data.cod === 200 ? response.data : $q.reject(response);
                }
                return response;
            }
            return $q.when(response);
        }
    };
});