Hashologist (v0.0.4) 
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

####Basic usage

If you install this package with the -g flag, a script will be placed in your path called `hashologist` (also alaised to `hasho` to save those precious keystrokes).

	$ hasho -h
	
	  Usage: hashologist hash1 hash2...
	
	  Options:
	
	    -h, --help     output usage information
	    -V, --version  output the version number
		
	
	$ hasho 4229d691b07b13341da53f17ab9f2416 7d793037a0760186574b0282f2f435e7
	┌────────────────────────────────────────┬──────────────────────────────┐
	│ Hash                                   │ Possible algorithms          │
	├────────────────────────────────────────┼──────────────────────────────┤
	│ 4229d691b07b13341da53f17ab9f2416       │ MD5                          │
	├────────────────────────────────────────┼──────────────────────────────┤
	│ 7d793037a0760186574b0282f2f435e7       │ MD5                          │
	└────────────────────────────────────────┴──────────────────────────────┘
	
####Piping from another application

Sometimes it might be useful to use the standard output of another application as the arguments to this script. That is possible using the magic of Unix pipes and Node Streams.

Text streams with hashes separated with any combination of [,\n ]+ will work.

Here's a example of querying a password column in **MySQL** and piping the output to **Hashologist**:

    $ mysql -e "SELECT password FROM users" -s | hasho
    
	┌────────────────────────────────────────┬──────────────────────────────┐
	│ Hash                                   │ Possible algorithms          │
	├────────────────────────────────────────┼──────────────────────────────┤
	│ 42bb6b99ef64edd72b58efa8a70f4c37       │ MD5                          │
	├────────────────────────────────────────┼──────────────────────────────┤
	│ e16cb092a0dbb62f1d6d933894ab20b1       │ MD5                          │
	└────────────────────────────────────────┴──────────────────────────────┘
		
##Tests

Tests are written in mocha. Run `npm test` to run all test.
	
##TODO 

- Add more algorithms
- Add different output options for CLI tool
