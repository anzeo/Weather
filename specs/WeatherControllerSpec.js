describe("The WeatherController", function(){

    var WeatherService;
    var TemperatureService;
    var controller;
    var $scope;

    beforeEach(module("weather"));
    beforeEach(inject(function($controller, $rootScope,  _WeatherService_, _TemperatureService_){
        WeatherService = sinon.mock(_WeatherService_);
        TemperatureService = sinon.mock(_TemperatureService_);
        $scope = $rootScope.$new();

        controller = $controller("WeatherController", {
            $scope: $scope,
            TemperatureService: _TemperatureService_,
            WeatherService: _WeatherService_
        })
    }));

    it("toggles between temperature units", function(){
        controller.temperatureUnit = "C";

        TemperatureService.expects("convertToFahrenheit").once();

        controller.toggleTemperatureUnit();

        TemperatureService.verify();
        expect(controller.temperatureUnit).toBe("F");
    });

    it("retrieves new data when the city changes", function(){
        var mockedPromise = { then: function(){}};
        $scope.city = "Test";

        WeatherService.expects("getLocalWeatherForCity").once().withArgs("Test").returns(mockedPromise);

        $scope.$digest();

        WeatherService.verify();
    });
});