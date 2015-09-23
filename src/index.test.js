// Load chai assertions.
var expect = require('chai').expect;
var should = require('chai').should();

// Load code to be tested.
var gaggregator = require('./index');

// Test suite.
describe('gaggregator', function() {

    it('is an object', function() {
        gaggregator.should.be.a('object');
    });

    describe('process', function() {

        it('is a function', function() {
            gaggregator.process.should.be.a('function');
        });

        it('throws an error when called without a path parameter', function() {
            gaggregator.process();
        });

        // todo: implement a test that watches for custom event 'end_parsed' 
        // and checks JSON has been created.

    });

});
