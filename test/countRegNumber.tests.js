var assert = require("assert");
var countRegNumber = require("../countRegNumber");


describe("Testing the countRegNumber function", function(){
    it("The function should  be able to count the amount of registration numbers that are passe on it", function(){
        assert.equal(4, countRegNumber('CA 879,JY 899,CJ 879,YT 989'))
    })

    it("The function should  be able to count the amount of registration numbers that are passe on it", function(){
        assert.equal(1, countRegNumber('CA 879'))
    })

    it("The function should  be able to count the amount of registration numbers that are passe on it", function(){
        assert.equal(0, countRegNumber(''))
    })

    it("The function should  be able to count the amount of registration numbers that are passe on it", function(){
        assert.equal(6, countRegNumber('CA 879,JY 899,CJ 879,YT 989,KL 677,KK 678'))
    })


});