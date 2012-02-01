/*
 * BASIC UNIT TESTS
 */
 
var slugs = require('../slugs');

exports['should-not-modify-string'] = function (test) {
    test.equal(slugs('thisisasafestring'), 'thisisasafestring');
    test.done();
};