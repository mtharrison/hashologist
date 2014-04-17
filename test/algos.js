var assert      = require("assert")
  , Hashologist = require('../index.js');

describe('Hashologist', function(){
  describe('Algorithms', function(){

    it('Should be able to guess an MD5', function(){
      var hashologist = new Hashologist('d41d8cd98f00b204e9800998ecf8427e');
      assert.equal(hashologist.solve()[0], "MD5");
    });

  });
});