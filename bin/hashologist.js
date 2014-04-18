#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander'),
    Hashologist = require('../index.js')
    Table = require('cli-table')
    package = require('../package.json');

program
    .version(package.version)
    .usage('hash1 hash2...')
    //@TODO implement these options
    //.option('-v', '--versobse', 'Adds more information to the output')
    //.option('-d', '--debug', 'List all the algorithms being checked and information about why they may not be a match')
    .parse(process.argv);

var numArgs = program.args.length;

if(numArgs < 1){
    console.log("You must pass at least 1 hash as an argument");
    process.exit(1);
}

var table = new Table({
    head: ['Hash', 'Possible algorithms'],
    colWidths: [40, 30]
});

for(var i = 0; i < program.args.length; i++){ 
    var algos = new Hashologist(program.args[i]).solve();
    table.push([
        program.args[i], 
        algos.length > 0 ?
            algos.map(function(el){ return el.name }).join(',') :
            '[ No matches found ]'

    ]);
}

console.log(table.toString());
