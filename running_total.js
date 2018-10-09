/*! running_total v1.1.0 - MIT license */
'use strict';

var running_total = function (input) {
  var total = 0;
  var list = []

  input.forEach(element => {
    total += element
    list.push(total)
  });
  return list;
}

if ( typeof module !== "undefined" ) {
  module.exports = running_total;
}
