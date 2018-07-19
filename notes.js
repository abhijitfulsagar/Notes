const fs = require('fs');

var fetchNotes = () =>{
	try{
		var data = fs.readFileSync('notesData.json');
		console.log(1+2);
		console.log(data);
		return JSON.parse(data);
	}catch(e){
		return [];
	}
};

var saveNotes = (notes)=>{
	fs.writeFileSync('notesData.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	

	var duplicateNotes = notes.filter((note) => note.title === title);
	if(duplicateNotes.length === 0){
		notes.push(note); 
		saveNotes(notes);
		console.log("Note added");
		displayNote(note);
	}else{
		console.log("Duplicate note already exist!!!");
	}	
};

var getAll = () =>{
	var notes = fetchNotes();
	notes.forEach((note)=> displayNote(note));
};

var getNotes = (title) =>{
	var notes  = fetchNotes();
	var filterNote = notes.filter((note) => note.title === title);
	if(filterNote){
		console.log("--Node--");
		displayNote(filterNote);
	}else{
		console.log("Note does not exist!!!");
	}	
};

var remove = (title) =>{
	var notes = fetchNotes();
	var filterNotes = notes.filter((note)=>note.title!== title);
	if(notes.length !== filterNotes.length){
		console.log(`Note with title:${title} removed`);
	}else{
		console.log("Note does not exist");
	}
	saveNotes(filterNotes);
};

var displayNote = (note) =>{
	console.log('---------');
	console.log(`Title:${note.title}`);
	console.log(`Body:${note.body}`);
}
module.exports ={
	//addNote:addNote (same as below)
	addNote,
	getAll,
	getNotes,
	remove,
	displayNote
}
