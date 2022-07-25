var assert = require("assert");
var yearsAgo = require("../yearsAgo")
describe("Testing the yearsAgo function", function(){
    it("The function should return how many years ago from the current year", function(){
        assert.equal('22 years Old', yearsAgo(2000))
    })

    it("The function should return how many years ago from the current year", function(){
        assert.equal('62 years Old', yearsAgo(1960))
    })

    it("The function should return how many years ago from the current year", function(){
        assert.equal('1822 years Old', yearsAgo(200))
    })

    it("The function should return how many years ago from the current year", function(){
        assert.equal('2002 years Old', yearsAgo(20))
    })
});