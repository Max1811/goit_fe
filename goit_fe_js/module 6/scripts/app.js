"use strict";




class Notepad {
  constructor(notes = []){
    this._notes = notes;
  }

  get notes(){
    return this._notes;
  }

  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2
  }; 

  saveNote(note){
    this._notes.push(note);
    return note;
  }

  findNoteById(id) {
    for (const obj of this._notes) {
      if(obj.id === id){
        return obj;
      }
    }
  }

  deleteNote(id){
    let temp;
    for(let i = 0; i < this._notes.length; i++){
      if(this._notes[i].id === id){
          temp = i;
          break;
      }
    }
    this._notes.splice(temp, 1);
  }

  updateNoteContent(id, updatedContent){
    const note = this.findNoteById(id);
    // const note = this.notes.find(function(n) { return n.id === id});
    if(!note) return null;

    for(const key in updatedContent) {
      note[key] = updatedContent[key]; 
    }
    return note;
  }

  updateNotePriority(id, priority) {
    let obj = this.findNoteById(id);
    obj.priority = priority;
  }

  filterNotesByQuery(query) {
    const temp = [];
    query = query.toLowerCase();

    for(const obj of this._notes){
      if(obj.body.toLowerCase().includes(query) || obj.title.toLowerCase().includes(query)){
        temp.push(obj);
      }
    }
    return temp;
  }

  filterNotesByPriority(priority) {
    const temp = [];
    for(const obj of this._notes){
      if(obj.priority === priority){
        temp.push(obj);
      }
    }
    return temp;
  }

}


const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Notepad.Priority.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Notepad.Priority.NORMAL,
  },
];

const notepad = new Notepad(initialNotes);
console.log(notepad.notes);


console.log('Note was Successfully added!', notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Notepad.Priority.NORMAL,
}));

console.log('Note was Successfully added!', notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW,
}));

console.log(notepad.notes);

notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

console.log('Заметки после обновления приоритета для id-4: ', notepad.notes);

notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

console.log('Заметки после обновления приоритета для id-3: ', notepad.notes);

console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
);

notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-3: ',
  notepad.notes,
);

notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.notes);

