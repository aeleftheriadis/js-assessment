exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;
    arr.forEach(function(item){sum +=item});
    return sum;
  },

  remove : function(arr, item) {
    return arr.filter(function(currentItem){
      return currentItem !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var intermediateArray = [];
    while (arr.length > 0) {
      var result = arr.shift();
      if (result !== item) {
        intermediateArray.unshift(result);
      }
    }
    while (intermediateArray.length > 0) {
      arr.unshift(intermediateArray.shift());
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    return arr.slice(1,arr.length);
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    arr.forEach(function(currentItem){
      if(currentItem === item){
        count++;
      }
    });
    return count;
  },

  duplicates : function(arr) {
    return arr.filter(function(item, i){
        return arr.lastIndexOf(item) == i && arr.indexOf(item)!= i;
    });
  },

  square : function(arr) {
    return arr.map(function(item){
      return item*item;
    })
  },

  findAllOccurrences : function(arr, target) {
    var resultsIndex = [];
    arr.filter(function(item, i){
      if(item === target){
        resultsIndex.push(i);
      }
    });
    return resultsIndex;
  }
};
