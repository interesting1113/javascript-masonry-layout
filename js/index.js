;(function(doc) {
  var oItems = doc.getElementsByClassName('wf-item');
  var oItemsLen = oItems.length;
  var _arr = [];

  var init = function() {
    setImgPos();
  }
  function setImgPos() {
    var item;
    for(var i = 0; i < oItemsLen; i++) {
      item = oItems[i];
      item.style.width = '232px';
      if(i < 5) {
        _arr.push(item.offsetHeight);
        item.style.top = '0';

        if((i + 1) % 5 === 1) {
          item.style.left = '0';
        }else {
          item.style.left = i * (232 + 10) + 'px';
        }
      }else {
        minIndex = getMinIndex(_arr); 
        item.style.left = oItems[minIndex].offsetLeft+ 'px';
        item.style.top = (_arr[minIndex] + 10 + 'px');
        _arr[minIndex] += (item.offsetHeight + 10); 
      }
    }
    getMinIndex(_arr);
  }
  function getMinIndex(arr) {
    return [].indexOf.call(arr, Math.min.apply(null, arr));
  }
window.onload = function() {
  init();
}
})(document);