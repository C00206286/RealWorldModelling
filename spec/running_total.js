var path = require('path');
var expect = require('chai').expect;

var running_total = require(path.join(__dirname, '..', './running_total.js'));

describe('running_total()', function () {
  'use strict';

  it('exists', function () {
    expect(running_total).to.be.a('function');

  });

  it('does something', function () {
    expect(6).to.equal(6);
  });



  // Add more assertions here
});
