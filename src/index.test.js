var expect = require('chai').expect;
var gaggregator = require('./index');

describe('gaggregator', function() {

    describe('all', function() {

        it('should return an array of strings', function() {
            function isArrayOfStrings (array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                });
            }

            expect(starWars.all).to.satisfy(isArrayOfStrings);
        });

        it('should contain \'Luke Skywalker\'', function() {
            expect(starWars.all).to.include('Luke Skywalker');
        });

    });

});
