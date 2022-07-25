

module.exports = function isWeekday(day){
    if(day.includes("Monday")){
    return true;
    }
    else if (day.includes("Tuesday")) {
      return true;
    }
    else if (day.includes("Wednesday")){
      return true;      
    }
    else if (day.includes("Thursday")){
      return true;
     }
    else if (day.includes("Friday")){
      return true;
    }
    else {
      return false;
    }
  }