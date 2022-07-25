//
module.exports = function yearsAgo(year){
const currentYear = new Date().getFullYear();

var youAre = currentYear - year;
  
return youAre + ' years Old';

}