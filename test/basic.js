var assert      = require("assert")
  , Hashologist = require('../index.js');

describe('Hashologist', function(){
  describe('Basic features', function(){

    it('Should accept a hash in a constructor', function(){
      var hashologist = new Hashologist('d41d8cd98f00b204e9800998ecf8427e');
      assert.equal(hashologist.hash, 'd41d8cd98f00b204e9800998ecf8427e');
    });

    it('Should throw when no hash passed', function(){
      assert.throws(
        function(){new Hashologist()}, Error
        );
    });

    it('Should determine if a hash is alphabetic', function(){
      var hashologist = new Hashologist('d41d8cd98f00b204e9800998ecf8427e');
      assert(hashologist.isAlphabetic());
      var hashologist = new Hashologist('1213548434');
      assert(!hashologist.isAlphabetic());
    });

    it('Should determine if a hash is numeric', function(){
      var hashologist = new Hashologist('1213548434');
      assert(hashologist.isNumeric());
      var hashologist = new Hashologist('dsjglkgjhdfsjh');
      assert(!hashologist.isNumeric());
    });

    it('Should determine if a hash is alphanumeric', function(){
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

    it('Should test an algo predicate', function(){
      var hashologist = new Hashologist('1234');
      assert(hashologist.testPredicate('isNumeric', true)     === true);
      assert(hashologist.testPredicate('isAlphabetic', false) === true);
    });

    it('Should throw for an invalid algo predicate', function(){
      var hashologist = new Hashologist('1234');
      assert.throws(function(){ hashologist.testPredicate('isFunky', true) });
    });

    it('Should test a set of algo predicates', function(){
      var hashologist = new Hashologist('1234');

      var algo1 = {
        predicates: {
          "isNumeric": true,
          "length": 4
        }
      };
      assert(hashologist.testAlgo(algo1) === true);

      var algo2 = {
        predicates: {
          "isAlphaNumeric": true,
          "length": 4
        }
      };
      assert(hashologist.testAlgo(algo2) === false);

      var algo3 = {
        predicates: {
          "isAlphaNumeric": false,
          "length": 5
        }
      };
      assert(hashologist.testAlgo(algo3) === false);

      var algo4 = {
        predicates: {
          "isNumeric": false,
          "length": 4
        }
      };
      assert(hashologist.testAlgo(algo4) === false);

    });

  });
});