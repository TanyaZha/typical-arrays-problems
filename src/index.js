
exports.min = function min (array) {

  if (array && array.length) {
    
    var min = Math.min.apply(null, array);

    return  min;
    

} else {
  return 0;
}
}

exports.max = function max (array) {
  if (array && array.length) {
    
    var max = Math.max.apply(null, array);

    return  max;
    

} else {
  return 0;
}
}

exports.avg = function avg (array) {
  
  if (array && array.length) {
    
      var result = array.reduce(function(sum, current) {
        return sum + current;
      }, 0);

      var avg = result/array.length;

      return  avg;
      

  } else {
    return 0;
  }
}
