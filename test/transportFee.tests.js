var assert = require("assert");
var transportFee = require("../transportFee");


describe("Testing the transportFee function", function(){
    it("The function should return the right price based on the shift the user was working", function(){
        assert.equal(transportFee('morning'), 'R20');
    })

    it("The function should return the right price based on the shift the user was working", function(){
        assert.equal(transportFee('afternoon'), 'R10');
    })

    it("The function should return the right price based on the shift the user was working", function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })

    it("The function should return the right price based on the shift the user was working", function(){
        assert.equal(transportFee('midafternoon'), 'You must look for a job');
    })
});