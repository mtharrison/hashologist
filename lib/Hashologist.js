var Hashologist = function(hash, algos) {
  if(typeof hash === 'undefined') 
    throw new Error("You must pass a hash to the constructor");

  this.algos = algos || require('../algos');
  this.hash = hash;
  this.length = hash.length;
};

Hashologist.prototype.isAlphabetic = function() {
  return this.hash.match(/[a-zA-Z]/) !== null;
};

Hashologist.prototype.isNumeric = function() {
  return this.hash.match(/[0-9]/) !== null;
};

Hashologist.prototype.isAlphaNumeric = function() {
  return this.isAlphabetic() && this.isNumeric();
};

Hashologist.prototype.solve = function() {
  var possible = []
  , algos      = this.algos

  for(var i in algos) {
    if(algos.hasOwnProperty(i)){
      var algo = algos[i];
      var pass = true;

      for(var j in algo.predicates)
        if(this.hasOwnProperty(j))
          if(typeof this[j] === 'function')
            if(this[j]() !== algo[j]) pass = false;
          else 
            if(this[j] !== algo[j])   pass = false;
                   
      if(pass) possible.push(i);
    }
  }

  return possible;
};

module.exports = Hashologist;