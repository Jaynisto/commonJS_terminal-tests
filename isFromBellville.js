// Creating an isFromBellville function
module.exports=function isFromBellville(origin){
    if(origin.startsWith("CY")){
        return true;
    }
    else {
        return false;
    }
    // return origin.startsWith("CY");
  }