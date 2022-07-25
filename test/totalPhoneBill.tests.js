var assert = require("assert");
var totalPhoneBill = require("../totalPhoneBill");

describe("Testing the totalPhoneBill function", function(){
    it("The function calculates the total phone bill for a given data, such as calls and sms", function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    })

    it("The function calculates the total phone bill for a given data, such as calls and sms", function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })

    it("The function calculates the total phone bill for a given data, such as calls and sms", function(){
        assert.equal('R5.50', totalPhoneBill('call, call'));
    })

    it("The function calculates the total phone bill for a given data, such as calls and sms", function(){
        assert.equal('R8.25', totalPhoneBill('call, call, call'));
    })
});