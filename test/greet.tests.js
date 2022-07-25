var assert = require("assert");
var greet = require("../greet");

describe(" Testing the greet fuction", function(){
    it("The fuction should take the User's name that is passed in it and greet the user with his/her name. e.g 'Hello, Bob'", function(){
        assert.equal("Hello, Bob", greet('Bob'))
    })

    it("When the fuction is called with an empty string 'Error'", function(){
        assert.equal("Error", greet(''))
    }) 

    it("The fuction should greet User for different names when it called : 'Hello, Sam'", function(){
        assert.equal("Hello, Sam", greet('Sam'))
    })
});