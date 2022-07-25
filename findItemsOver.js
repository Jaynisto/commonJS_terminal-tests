module.exports = function findItemsOver(items, threshold){
    var over = [];
    for(var i = 0; i < items.length; i++){
      var listOfItems = items[i];
      if(listOfItems.qty > threshold){
        over.push(listOfItems);
      }
    }
    return over;
  }