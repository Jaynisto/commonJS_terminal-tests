
module.exports = function totalPhoneBill(callAndSms){
    var callOrSmsArray = callAndSms.split(', ');
    var call = 0;
    var sms = 0;
    for(var i = 0; i < callOrSmsArray.length; i++){
        var bill = callOrSmsArray[i];
        if(bill === 'call'){
          call+= 2.75;
          }else{
            sms+= 0.65;
            }
        }
      var totalBill = call + sms;
     return 'R' + totalBill.toFixed(2);
    }