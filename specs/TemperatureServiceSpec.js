describe("The TemperatureService", function(){
    var TemperatureService;

    beforeEach(module("weather"));
    beforeEach(inject(function(_TemperatureService_){
        TemperatureService = _TemperatureService_;
    }));

    it("can convert a temperature in Celsius to Fahrenheit", function(){
        expect(TemperatureService.convertToFahrenheit(100)).toBeCloseTo(212, 2);
    });

    it("can convert a temperature in Fahrenheit to Celsius", function(){
        expect(TemperatureService.convertToCelsius(212)).toBeCloseTo(100, 2);

    });
});