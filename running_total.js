/*! running_total v1.1.0 - MIT license */
'use strict';

var running_total = function (input) {
  var total = 0;

  input.forEach(element => {
    total += element
  });
  return total;
}

if ( typeof module !== "undefined" ) {
  module.exports = running_total;
}
