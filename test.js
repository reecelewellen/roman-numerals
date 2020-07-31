const assert = require('assert');
const { convert } = require('./app')

describe('app()', function() {
  describe('convert()', function() {
    it('Should return V', function() {
      assert.equal('V', convert(5));
    });
  });
});