/*
 * BASIC UNIT TESTS
 */
 
var slugs = require('../slugs');

exports['should-not-modify-string'] = function (test) {
    test.equal(slugs('thisisasafestring'), 'thisisasafestring');
    test.done();
};

exports['should-replace-spaces-but-nothing-else'] = function(test){
    test.equal(slugs('this is a string with spaces'), 'this-is-a-string-with-spaces');
    test.done();
};

exports['should-replace-periods-with-hashes'] = function(test){
    //Shouldn't allow trailing hash
    test.equal(slugs('thisisastring.with.aperiod.'), 'thisisastring-with-aperiod'); 
    test.done();
}

exports['should-not-have-forward-or-trailing-hash'] = function(test){
    test.equal(slugs(' space in front and in back '),'space-in-front-and-in-back');
    test.done();
}

exports['should-convert-everything-to-lower-case'] = function(test){
    test.equal(slugs('This should all be in LowEr Case'),'this-should-all-be-in-lower-case');
    test.done();
}

exports['should-preserve-numbers-and-characters'] = function(test){
    test.equal(slugs('Please keep m4h numb3r5'),'please-keep-m4h-numb3r5');
    test.done();
}

exports['should-not-contain-duplicate-hashes-for-multiple-spaces'] = function(test){
    test.equal(slugs('SHOULD-LOOK-NORMAL------'), 'should-look-normal');
    test.done();
}