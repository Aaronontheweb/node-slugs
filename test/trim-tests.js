/*
 * TRIM MODULE UNIT TESTS
 */
 
 var trim = require('../lib/trim');
 
exports['should-ltrim-space-from-string'] = function (test) {
    test.equal(trim.ltrim(' thisisasafestring'), 'thisisasafestring');
    test.done();
};

exports['should-rtrim-space-from-string'] = function (test) {
    test.equal(trim.rtrim('thisisasafestring '), 'thisisasafestring');
    test.done();
};

exports['should-trim-spaces-from-both-sides-of-string'] = function (test) {
    test.equal(slugs(' thisisasafestring '), 'thisisasafestring');
    test.done();
};

exports['should-not-modify-string-without-extra-whitespace'] = function (test) {
    test.equal(trim.trim('thisisasafestring'), 'thisisasafestring');
    test.done();
};

exports['should-trim-spaces-from-both-sides-of-string'] = function (test) {
    test.equal(trim.trim('thisisasafestring'), 'thisisasafestring');
    test.done();
};

exports['should-rtrim-spaces-dashes-from-string'] = function (test) {
    test.equal(trim.trim('thisisasafestring-','-'), 'thisisasafestring');
    test.done();
};