describe("The TemperatureService", function(){
    var TemperatureService;

    beforeEach(module("weather"));
    beforeEach(inject(function(_TemperatureService_){
        TemperatureService = _TemperatureService_;
    }));

    it("can convert a temperature in Celsius to Fahrenheit", function(){
        expect(true).toBe(false);
    });

    it("can convert a temperature in Fahrenheit to Celsius", function(){
        expect(true).toBe(false);
    });
});