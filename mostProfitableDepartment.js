module.exports = function mostProfitableDepartment(salesData){
    var higDep = 0;
    var departmentSales = {};
    var theDepartment;
    for (var i=0 ;i<salesData.length;i++){
      var salesList = salesData[i];
      if(departmentSales[salesList.department] == undefined){
        departmentSales[salesList.department] = salesList.sales;
      }
      else {
        departmentSales[salesList.department] = departmentSales[salesList.department] + salesList.sales;
      }
    }
    for(var i in departmentSales){
      if(i == undefined)
        break;
      if(departmentSales[i] > higDep){
        higDep = departmentSales[i];
        theDepartment = i;
      }
    }
    return (theDepartment);
    console.log("Most profitable department is "+ theDepartment +" for dataset 1:")
  }