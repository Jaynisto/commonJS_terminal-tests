//Creating a registration check function

module.exports = function regCheck(regNo, localI){
    return regNo.includes(localI);
  }