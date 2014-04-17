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
  , algos    = this.algos

  for(var i in algos) 
    if(this.testAlgo(algos[i])) possible.push(algos[i]);

  return possible;
};

Hashologist.prototype.testAlgo = function(algo) {
  for(var i in algo.predicates)
    if(!this.testPredicate(i, algo.predicates[i])) return false;

  return true
};

Hashologist.prototype.testPredicate = function(predicate, value) {
  if(this.hasOwnProperty(predicate)) {
    if(this[predicate]   !== value) return false;
  }
  else if(this.__proto__.hasOwnProperty(predicate)) {
    if(this[predicate]() !== value) return false;
  }
  else {
    throw new Error("Predicate [" + predicate + "] is not valid");
  }

  return true;

};

module.exports = Hashologist;