var Hashologist = function(hash) {
	if(typeof hash === 'undefined') 
		throw new Error("You must pass a hash to the constructor");

	this.hash = hash;
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

module.exports = Hashologist;