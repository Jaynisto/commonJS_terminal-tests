var assert = require("assert")
var countAllPaarl = require("../countAllPaarl");

describe("Testing the countAllPaarl function", function(){
    it("The fuction should count all registration plates with sring for Paarl", function(){
        assert.equal(5, countAllPaarl('CJ 345 123, CJ 2345, CJ 123-546, CJ 345, CJ 123'));
    })

    it("The fuction should count all registration plates with sring for Paarl", function(){
        assert.equal(3, countAllPaarl('CI 345 123, CK 2345, CJ 123-546, CJ 345, CJ 123'));
    })

    it("The fuction should count all registration plates with sring for Paarl", function(){
        assert.equal(1, countAllPaarl('IO 345 123, ZS 2345, KG 123-546, KJ 345, CJ 123'));
    })

    it("The fuction should count all registration plates with sring for Paarl", function(){
        assert.equal(0, countAllPaarl('IO 345 123, ZS 2345, KG 123-546, KJ 345, CP 123'));
    })
});