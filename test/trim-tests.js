/*
 * TRIM MODULE UNIT TESTS
 */
 
 var trim = require('../lib/trim');
 
exports['should-ltrim-space-from-string'] = function (test) {
    test.equal(slugs(' thisisasafestring'), 'thisisasafestring');
    test.done();
};