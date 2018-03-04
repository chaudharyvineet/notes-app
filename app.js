console.log('starting app');

var fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

var notes = require('./notes.js')

const titleOptions = {
  describe: 'Title of note',
  demand:true,
  alias: 't'
};

const bodyOptions = {
    describe : 'body of note',
    demand:true,
    alias: 'b'
}
var argv = yargs
    .command('add', 'add a new object',{
    title: titleOptions,
    body: bodyOptions
    })
    .command('list','list alll notes')
    .command('read', 'read a note',{
      title: titleOptions,
    })
    .command('remove','removing a note',{
      title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];
console.log('command:' , command);
console.log('yargs',argv);

if(command === 'add'){
  var note = notes.addNote(argv.title , argv.body);
  if(note){
    console.log('note created successfully');
    notes.logNote(note);
  } else {
    console.log('Title aready taken');
  }
} else if (command==='list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));

} else if (command==='read') {
   var note = notes.getNotes(argv.title);
   if (note) {
     console.log('note found')
     notes.logNote(note);
   } else {
     console.log('note not found')
   }
}else if(command==='remove'){
  var noteRemoved = notes.dele(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else{
  console.log('commmand not recognized');
}
