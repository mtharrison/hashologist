#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander'),
    Hashologist = require('../index.js'),
    Table = require('cli-table'),
    package = require('../package.json'),
    input = "",
    hashes = []

program
    .version(package.version)
    .usage('hash1 hash2...')
    //@TODO implement these options
    //.option('-v', '--versobse', 'Adds more information to the output')
    //.option('-d', '--debug', 'List all the algorithms being checked and information about why they may not be a match')
    .parse(process.argv);

var numArgs = program.args.length;

// Process args passed
if(numArgs > 0){
    hashes = program.args;
    processHashes(hashes);
}

function processHashes(hashes) {
    var table = new Table({
        head: ['Hash', 'Possible algorithms'],
        colWidths: [40, 30]
    });

    for(var i = 0; i < hashes.length; i++){ 
        var algos = new Hashologist(hashes[i]).solve();
        table.push([
            hashes[i], 
            algos.length > 0 ?
                algos.map(function(el){ return el.name }).join(',') :
                '[ No matches found ]'
    
        ]);
    }

    console.log(table.toString());

    process.exit(0);
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
    input += data;  
});
process.stdin.on('end', function(){
    hashes = input.replace(/[\n, ]+/g, ',').split(',');
    console.log(hashes);
    processHashes(hashes.slice(0,-1));
});
