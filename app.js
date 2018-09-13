const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note created successfully.');
        notes.logNote(note);
    } else {
        console.log("Title already in use.");
    }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing - ${allNotes.length} note(s)`);
    allNotes.forEach(note => {
        return notes.logNote(note);
    });

} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed successfully' : 'Note not found';
    console.log(message);    
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if(note) {
        console.log('Note read successfully.');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }

} else {
    console.log('Command not recognized');
}