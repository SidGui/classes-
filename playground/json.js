// var obj = {
//     name: 'Sidao'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);

// var personString = '{"name": "Sidao","age": 26}';
// var person = JSON.parse(personString);
// console.log(typeof(person));
// console.log(person);

const fs = require('fs');

var originalNote ={
    title: 'Some title',
    body: 'Algum texto 2'
};
//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
// note;
console.log(typeof note);
console.log(note.title);
console.log(note.body);