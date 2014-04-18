var assert      = require("assert")
  , Hashologist = require('../index.js');

describe('Hashologist', function(){
  describe('Algorithms', function(){

    it('Should be able to guess an MD5', function(){
      var hashologist = new Hashologist('d41d8cd98f00b204e9800998ecf8427e');
      assert.equal(hashologist.solve()[0].name, "MD5");
    });

    it('Should be able to guess an SHA1', function(){
      var hashologist = new Hashologist('4a1d4dbc1e193ec3ab2e9213876ceb8f4db72333');
      assert.equal(hashologist.solve()[0].name, "SHA1");
    });
    
    it('Should be able to guess an SHA256', function(){
      var hashologist = new Hashologist('2c740d20dab7f14ec30510a11f8fd78b82bc3a711abe8a993acdb323e78e6d5e');
      assert.equal(hashologist.solve()[0].name, "SHA256");
    });
    
    it('Should be able to guess an SHA512', function(){
      var hashologist = new Hashologist('ea8e6f0935b34e2e6573b89c0856c81b831ef2cadfdee9f44eb9aa0955155ba5e8dd97f85c73f030666846773c91404fb0e12fb38936c56f8cf38a33ac89a24e');
      assert.equal(hashologist.solve()[0].name, "SHA512");
    });

  });
});
