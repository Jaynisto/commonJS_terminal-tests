var assert = require('assert');
var countAllFromTown = require('../countAllFromTown');

var fromStellies =  countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
var fromKuilsriver = countAllFromTown('CF 124,CY 567,CL 345, CF 456, CJ 341','CF');
var fromCapetown = countAllFromTown('PA 687,PC 980,XC 790,XL 243', 'XC');
var fromVenda = countAllFromTown('CF 124,CY 567,CL 345, CF 456, CJ 341','VF');

describe("Testing the countAllFromTown function", function(){
    it("The fuction should return number registration numbers in the string that is for that town.", function(){
        assert.equal(fromStellies, 3)
    })

    it("The fuction should return number registration numbers in the string that is for that town.", function(){
            assert.equal(fromKuilsriver, 2)
    })

    it("The fuction should return number registration numbers in the string that is for that town.", function(){
        assert.equal(fromCapetown, 1)
    })

    it("The fuction should return number registration numbers in the string that is for that town.", function(){
        assert.equal(fromVenda, 0)
    })

});