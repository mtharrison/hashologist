var assert      = require("assert")
  , Hashologist = require('../index.js');

describe('Hashologist', function(){
  describe('Basic features', function(){

    it('Should be able to accept a hash in a constructor', function(){
      var hashologist = new Hashologist('d41d8cd98f00b204e9800998ecf8427e');
      assert.equal(hashologist.hash, 'd41d8cd98f00b204e9800998ecf8427e');
    });

    it('Should throw when no hash passed', function(){
      assert.throws(
        function(){new Hashologist()}, Error
        );
    });

    it('Should be able to determine if a hash is alphabetic', function(){
      var hashologist = new Hashologist('d41d8cd98f00b204e9800998ecf8427e');
      assert(hashologist.isAlphabetic());
      var hashologist = new Hashologist('1213548434');
      assert(!hashologist.isAlphabetic());
    });

    it('Should be able to determine if a hash is numeric', function(){
      var hashologist = new Hashologist('1213548434');
      assert(hashologist.isNumeric());
      var hashologist = new Hashologist('dsjglkgjhdfsjh');
      assert(!hashologist.isNumeric());
    });

    it('Should be able to determine if a hash is alphanumeric', function(){
      var hashologist = new Hashologist('1213548434');
      assert(!hashologist.isAlphaNumeric());
      var hashologist = new Hashologist('dsjglkgjhdfsjh');
      assert(!hashologist.isAlphaNumeric());
      var hashologist = new Hashologist('d41d8cd98f00b204e9800998ecf8427e');
      assert(hashologist.isAlphaNumeric());
    });

    it('Should solve a hash, returning an array of likely hashes', function(){
      var hashologist = new Hashologist('1213548434');
      assert.equal(typeof hashologist.solve(), 'object');
    });

  });
});