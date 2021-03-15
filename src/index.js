
exports.min = function min (array) {
    if (array === undefined || array.length === 0) { return 0}
    else {
      var min = array[0];
      for(var i = 0; i < array.length; i++) {
        if(array[i] <= min) min = array[i];
    }
    return min;
};0 }


exports.max = function max (array) {
    if (array === undefined || array.length === 0) { return 0}
    else{
      var max = array[0];
    for(var i = 0; i < array.length; i++) {
        if(array[i] >= max) max = array[i];
       } return max;
}
}

exports.avg = function avg (array) {
    var average = 0;
    if (array === undefined || array.length === 0) { return 0}
    else {
      for(var i = 0; i < array.length; i++) {
        average += array[i];
}
        average /= array.length;
  return average;
    }
}
