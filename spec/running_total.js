var path = require('path');
var expect = require('chai').expect;

var running_total = require(path.join(__dirname, '..', './running_total.js'));

describe('running_total()', function () {
  'use strict';

  it('exists', function () {
    expect(running_total).to.be.a('function');

  });

  it('works', function () {
    expect(running_total([4,2,8,3,9,4,10,5,11,6])).to.deep.equal([4,6,14,17,26,30,40,45,56,62]);
  });
  it('works with one', function () {
    expect(running_total([2])).to.deep.equal([2]);
  });
  it('empty list', function () {
    expect(running_total([])).to.deep.equal([]);
  });
  it('negative', function () {
    expect(running_total([-4,-2,8,3])).to.deep.equal([-4,-6,2,5]);
  });


  // Add more assertions here
});
