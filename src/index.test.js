// Load chai assertions.
var expect = require('chai').expect;
var should = require('chai').should();

// Load code to be tested.
var gaggregator = require('./index');

// Test suite.
describe('gaggregator', function() {

    it('should be an object', function() {
        gaggregator.should.be.a('object');
    });

    describe('process', function() {

        it('should be a function', function() {
            gaggregator.process.should.be.a('function');
        });

        it('is expected to throw an error when called without any parameter', function() {
            expect(function() {
                gaggregator.process();
            }).to.throw(Error);
        });

        it('is expected to throw an error when called without any callback parameter', function() {
            expect(function() {
                gaggregator.process({
                    path: './src/test.csv'
                });
            }).to.throw(Error);
        });

        it('is expected to throw an error when called without any path parameter', function() {
            function callback (data) {
                return data;
            };

            expect(function() {
                gaggregator.process({
                    callback: callback
                });
            }).to.throw(Error);
        });

        it('is expected to throw an error when called with a callback that is not a function', function() {
            var callback = {};

            expect(function() {
                gaggregator.process({
                    path: './src/data.csv',
                    callback: callback
                });
            }).to.throw(Error);
        });

        it('is expected to convert csv data into json', function (done) {
            gaggregator.process({
                path: './src/data-copy.csv',
                callback: function (data) {
                    data.should.be.a('array');
                    done();
                }
            });
        });

    });

});
