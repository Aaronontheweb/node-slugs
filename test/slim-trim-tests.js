/*
 * TRIM MODULE UNIT TESTS
 */
 
 var trim = require('../lib/slim-trim');
 

exports['should-trim-spaces-from-both-sides-of-string'] = function (test) {
    test.equal(trim(' thisisasafestring '), 'thisisasafestring');
    test.done();
};

exports['should-not-modify-string-without-extra-whitespace'] = function (test) {
    test.equal(trim('thisisasafestring'), 'thisisasafestring');
    test.done();
};

exports['should-trim-dashes-from-both-sides-of-string'] = function (test) {
    test.equal(trim('-thisisasafestring-','-'), 'thisisasafestring');
    test.done();
};

exports['should-trim-extra-dashes-from-string'] = function (test) {
    test.equal(trim('------thisis-asafestring-------','-'), 'thisis-asafestring');
    test.done();
};

exports['should-trim-extra-spaces-from-string'] = function (test) {
    test.equal(trim('       thisis-asafestring      '), 'thisis-asafestring');
    test.done();
};