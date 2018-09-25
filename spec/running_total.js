var path = require('path');
var expect = require('chai').expect;

var running_total = require(path.join(__dirname, '..', './running_total.js'));

describe('running_total()', function () {
  'use strict';

  it('exists', function () {
    expect(running_total).to.be.a('function');

  });

  it('add 6', function () {
    expect(running_total(6)).to.equal(6);
  });
  it('add 2', function () {
    expect(running_total(2)).to.equal(8);
  });
  it('add 10', function () {
    expect(running_total(10)).to.equal(18);
  });
  it('add -6', function () {
    expect(running_total(-6)).to.equal(12);
  });
  it('add -12', function () {
    expect(running_total(-12)).to.equal(0);
  });
  it('add -12', function () {
    expect(running_total(-12)).to.equal(-12);
  });



  // Add more assertions here
});
