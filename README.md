Hashologist (v0.0.1)
===========

[![Build Status](https://travis-ci.org/mtharrison/hashologist.svg?branch=master)](https://travis-ci.org/mtharrison/hashologist)

A node.js module that identifies cryptographic hash algorithms from resultant ciphertext.

This is a port of a Python library to Node (https://code.google.com/p/hash-identifier/)

## Installation

Run `npm install -g hashologist`

##Basic usage

	var Hashologist = require('hashologist');
	var hash = new Hashologist('d41d8cd98f00b204e9800998ecf8427e');
	var algos = hash.solve(); // ["MD5"]
	
##Supported Algorithms

The following algorithms are supported so far (more to come):

- MD5
- SHA1
- SHA256
- SHA512

All algorithms are found in the `algos.json` file.

##Command line tool

If you install this package with the -g flag, a script will be placed in your path called `hashologist` (also aliased to `hasho` to save those precious keystrokes).

	$ hasho -h
	
	  Usage: hashologist hash1 hash2...
	
	  Options:
	
	    -h, --help     output usage information
	    -V, --version  output the version number
		
	
	$ hasho 4229d691b07b13341da53f17ab9f2416 4a1d4dbc1e193ec3ab2e9213876ceb8f4db72333
	┌────────────────────────────────────────┬──────────────────────────────┐
	│ Hash                                   │ Possible algorithms          │
	├────────────────────────────────────────┼──────────────────────────────┤
	│ 4229d691b07b13341da53f17ab9f2416       │ MD5                          │
	├────────────────────────────────────────┼──────────────────────────────┤
	│ 4a1d4dbc1e193ec3ab2e9213876ceb8f4db72..│ SHA1                         │
	└────────────────────────────────────────┴──────────────────────────────┘
	
##Tests

Tests are written in mocha. Run `npm test` to run all test.
	
##TODO 

- Add more algorithms
- Add different output options for CLI tool
- Support unix pipes and node streams
