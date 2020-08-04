const assert = require('assert');
const { ArabicNumber } = require('./app')

describe('ArabicNumber()', function() {
  describe('arabicToRoman(-2)', function() {
    const myNumber = new ArabicNumber(-2);
    myNumber.arabicToRoman();
    it('Should return null for a negative number', function() {
      assert.equal(null, myNumber.getNumeral());
    });
  });
  describe('arabicToRoman(5)', function() {
    const myNumber = new ArabicNumber(5);
    myNumber.arabicToRoman();
    it('Should return V', function() {
      assert.equal('V', myNumber.getNumeral());
    });
  });
  describe('arabicToRoman(10)', function() {
    const myNumber = new ArabicNumber(10);
    myNumber.arabicToRoman();
    it('Should return X', function() {
      assert.equal('X', myNumber.getNumeral());
    });
  });
  describe('arabicToRoman(43)', function() {
    const myNumber = new ArabicNumber(43);
    myNumber.arabicToRoman();
    it('Should return XLIII', function() {
      assert.equal('XLIII', myNumber.getNumeral());
    });
  });
  describe('arabicToRoman(999)', function() {
    const myNumber = new ArabicNumber(999);
    myNumber.arabicToRoman();
    it('Should return CMXCIX', function() {
      assert.equal('CMXCIX', myNumber.getNumeral());
    });
  });
});