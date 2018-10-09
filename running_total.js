/*! running_total v0.0.0 - MIT license */
'use strict';
var total = 0;
var input = 0;

/*
Name: running_total
Replace each number by the sum of itself and all the previous numbers.
Sample Input: 4 2 8 3 9 4 10 5 11 6
Sample Output: 4 6 14 17 26 30 40 45 56 62
*/

var running_total = function (list) {

  //Slice does a shallow copy
  var newList = list.slice();

  // Run through every item in list
  for(var i=0; i < list.length; i++){
    // Run through every previous item
    for(var j=0; j < i; j++){
      newList[i] += list[j];
    }
  }

  return newList;
}

if ( typeof module !== "undefined" ) {
  module.exports = running_total;
}
