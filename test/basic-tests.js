/*
 * BASIC UNIT TESTS
 */
 
var doubled = require('../slugs');

exports['should-not-modify-string'] = function (test) {
    test.equal(slugs('thisisasafestring'), 'thisisasafestring');
    test.done();
};