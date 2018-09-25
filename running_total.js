/*! running_total v0.0.0 - MIT license */
'use strict';
var total = 0;
var input = 0;

var running_total = function (input) {
  // your code goes here
  total = input + total;
  return total;
}

if ( typeof module !== "undefined" ) {
  module.exports = running_total;
}
