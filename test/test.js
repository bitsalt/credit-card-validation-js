//require('../luhnValidation.js');
const validate = require('../luhnValidation.js');
let assert = require('chai').assert;

// valid test numbers are 
// from https://www.paypalobjects.com/en_US/vhelp/paypalmanager_help/credit_card_numbers.htm
const invalidCardNum = 1234567890987654;
const validCardNum = 4012888888881881;
const validVisa = 4222222222222; // test with only 13 numbers
const validMastercard = 5105105105105100;
const validDiscover = 6011111111111117;
const validAmericanExpress = 378282246310005;

describe('#validateCreditCard()', function() {
    context('with valid number', function() {
        it('should return true', function() {
            let validResult = validate.validateCreditCard(validCardNum);
            assert.isTrue(validResult, 'The given card number is valid.')
        });
    });
});


describe('#validateCreditCard()', function() {
    context('with invalid number', function() {
        it('should return false', function() {
            let invalidResult = validate.validateCreditCard(invalidCardNum);
            assert.isNotTrue(invalidResult, 'The given card number is not valid.')
        });
    });
});

describe('#validateVisa()', function() {
    context('with valid number', function() {
        it('should return true', function() {
            let validResult = validate.validateVisa(validVisa);
            assert.isTrue(validResult, 'The given card number is valid.')
        });
    });
});

describe('#validateVisa()', function() {
    context('with invalid number', function() {
        it('should return false', function() {
            let invalidResult = validate.validateVisa(invalidCardNum);
            assert.isNotTrue(invalidResult, 'The given card number is not valid.')
        });
    });
});

describe('#validateMastercard()', function() {
    context('with valid number', function() {
        it('should return true', function() {
            let validResult = validate.validateMastercard(validMastercard);
            assert.isTrue(validResult, 'The given card number is valid.')
        });
    });
});

describe('#validateMastercard()', function() {
    context('with invalid number', function() {
        it('should return false', function() {
            let invalidResult = validate.validateMastercard(invalidCardNum);
            assert.isNotTrue(invalidResult, 'The given card number is not valid.')
        });
    });
});

describe('#validateAmericanExpress()', function() {
    context('with valid number', function() {
        it('should return true', function() {
            let validResult = validate.validateAmericanExpress(validAmericanExpress);
            assert.isTrue(validResult, 'The given card number is valid.')
        });
    });
});

describe('#validateAmericanExpress()', function() {
    context('with invalid number', function() {
        it('should return false', function() {
            let invalidResult = validate.validateAmericanExpress(invalidCardNum);
            assert.isNotTrue(invalidResult, 'The given card number is not valid.')
        });
    });
});

describe('#validateDiscover()', function() {
    context('with valid number', function() {
        it('should return true', function() {
            let validResult = validate.validateDiscover(validDiscover);
            assert.isTrue(validResult, 'The given card number is valid.')
        });
    });
});

describe('#validateDiscover()', function() {
    context('with invalid number', function() {
        it('should return false', function() {
            let invalidResult = validate.validateDiscover(invalidCardNum);
            assert.isNotTrue(invalidResult, 'The given card number is not valid.')
        });
    });
});


