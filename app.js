const fs = require('fs');
const _ =require("lodash");
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
			describe:'Title for a new note',
			demand: true,
			alias:'t'
		};
const bodyOptions = {
			describe:'body for a new note',
			demand: true,
			alias:'b'
		};

const argv = yargs
	.command('add','Add a new note ',{
		title:titleOptions,
		body:bodyOptions
	})
	.command('list','List all notes')
	.command('read','reading a particular note',{
		title:titleOptions
	})
	.command('remove','remove a note',{
		title:titleOptions
	})
	.help()
	.argv;
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