const fs = require('fs');
const _ =require("lodash");
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command:',command);
console.log('Yargs:',argv);

if(command === 'add'){
	notes.addNote(argv.title,argv.body);
}else if(command === 'read'){
	notes.getNotes(argv.title);
}else if(command === 'remove'){
	notes.remove(argv.title);
}else if(command === 'list'){
	notes.getAll();
}else{
	console.log("Not a valid command")
}