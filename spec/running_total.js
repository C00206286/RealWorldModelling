var path = require('path');
var expect = require('chai').expect;

var running_total = require(path.join(__dirname, '..', './running_total.js'));

describe('running_total()', function () {
  'use strict';

  it('exists', function () {
    expect(running_total).to.be.a('function');

  });

  it('[1, 2, 3]', function () {
    expect(running_total([1, 2, 3])).to.equal(6);
  });
  
  it('[-1, -5, -6]', function () {
    expect(running_total([-1, -5, -6])).to.equal(-12);
  });
});
