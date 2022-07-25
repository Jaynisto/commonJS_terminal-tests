var assert = require("assert");
var regCheck = require("../regCheck");

describe("Testing the regCheck function", function(){
    it("The function should check the registration number for that particular place by identifying it local identity.",function(){
        assert.equal(true, regCheck('DM 45 MJ GP', 'GP'))
    })

    it ("The function should check even if the local identity is not on the registration number.", function(){
        assert.equal(false, regCheck('CJ 76 MP', 'GP'))
    })

    it ("The function should check even if the local identity is not on the registration number.", function(){
        assert.equal(false, regCheck('MP 900', 'GP'))
    })

    it ("The function should check the registration number for that particular place by identifying it local identity.", function(){
        assert.equal(true, regCheck('MP 378', 'MP'))
    })
});