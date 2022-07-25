var assert = require("assert");
var fromWhere = require("../fromWhere");

describe("Testing the fromWhere function", function(){
    it("The function should return the town from just reading the registration number string", function(){
        assert.equal('Bellville', fromWhere('CY'))
    })


    it("The function should return the town from just reading the registration number string", function(){
        assert.equal('Paarl', fromWhere('CJ'))
    })

    it("The function should return the town from just reading the registration number string", function(){
        assert.equal('Cape Town', fromWhere('CA'))
    })


    it("The function should return the town from just reading the registration number string", function(){
        assert.equal('Some other place!', fromWhere('AD'))
    })
})