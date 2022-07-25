
module.exports = function countAllFromTown(regNumbers, town){
    var array = regNumbers.split(",");
    var count = 0;
    for(var i = 0; i < array.length; i++){
      var listRegNumbers = array[i].trim();
      if(listRegNumbers.includes(town))
      count++
    }
    return count;
  }
  

  // var fromStellies =  countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
  // var fromKuilsriver = countAllFromTown('CF 124,CY 567,CL 345, CF 456, CJ 341','CF');
  // var fromCapetown = countAllFromTown('PA 687,PC 980,XC 790,XL 243', 'XC');
  // var fromVenda = countAllFromTown('CF 124,CY 567,CL 345, CF 456, CJ 341','VF');
