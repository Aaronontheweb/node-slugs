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
    test.equal(trim.trim(' thisisasafestring '), 'thisisasafestring');
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

exports['should-rtrim-dashes-from-string'] = function (test) {
    test.equal(trim.rtrim('thisisasafestring-','-'), 'thisisasafestring');
    test.done();
};

exports['should-ltrim-dashes-from-string'] = function (test) {
    test.equal(trim.ltrim('-thisisasafestring','-'), 'thisisasafestring');
    test.done();
};

exports['should-trim-dashes-from-both-sides-of-string'] = function (test) {
    test.equal(trim.trim('-thisisasafestring-','-'), 'thisisasafestring');
    test.done();
};

exports['should-rtrim-extra-dashes-from-string'] = function (test) {
    test.equal(trim.rtrim('thisis-asafestring------','-'), 'thisis-asafestring');
    test.done();
};

exports['should-ltrim-extra-dashes-from-string'] = function (test) {
    test.equal(trim.ltrim('------thisis-asafestring','-'), 'thisis-asafestring');
    test.done();
};

exports['should-trim-extra-dashes-from-string'] = function (test) {
    test.equal(trim.trim('------thisis-asafestring-------','-'), 'thisis-asafestring');
    test.done();
};

exports['should-ltrim-extra-spaces-from-string'] = function (test) {
    test.equal(trim.ltrim('     thisis-asafestring'), 'thisis-asafestring');
    test.done();
};

exports['should-rtrim-extra-spaces-from-string'] = function (test) {
    test.equal(trim.rtrim('thisis-asafestring      '), 'thisis-asafestring');
    test.done();
};

exports['should-trim-extra-spaces-from-string'] = function (test) {
    test.equal(trim.trim('       thisis-asafestring      '), 'thisis-asafestring');
    test.done();
};