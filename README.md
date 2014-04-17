Hashologist (v0.0.0)
===========

A node.js module that identifies cryptographic hash algorithms from resultant ciphertext.

This is a port of a Python library to Node (https://code.google.com/p/hash-identifier/)

##Installation

`npm install hashologist`

##Basic usage

	var Hashologist = require('hashologist');
	var hash = new Hashologist('d41d8cd98f00b204e9800998ecf8427e');
	var algos = hash.solve(); // ["MD5"]
	
##Supported Algorithms

The following algorithms are supported:

- MD5

All algorithms are found in the `algos.json` file.

	
##Tests

Tests are written in mocha. Run `npm test` to run all test.

##TODO 

Add more algorithms
Create CLI tool
