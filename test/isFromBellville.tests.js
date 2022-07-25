var assert = require("assert");
var isFromBellville = require("../isFromBellville");

describe("Testing the isFromBellville fuction", function(){
    it("The fuction must return true if the registration plate starts with 'CY'", function(){
        assert.equal(true, isFromBellville('CY 231'))
    })

    it("The fuction must must return false if it does not start with 'CY'", function(){
        assert.equal(false, isFromBellville('LJ 127'))
    })
});