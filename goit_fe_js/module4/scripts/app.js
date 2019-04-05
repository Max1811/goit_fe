"use strict";

const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};

const notepad = {
  notes: [],
  
  getNotes() {
    return this.notes;
  },

  printNotes(notes) {
    for (const obj of notes) {
      console.log(`${obj.id} ${obj.title} ${obj.body} ${obj.priority}`)
    }
  },

  findNoteById(id) {
    for (const obj of this.notes) {
      if(obj.id === id){
        return obj;
      }
    }
  },

  saveNote(note) {
    this.notes.push(note);
    return note;
  },

  deleteNote(id) {
    
    let temp;
    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].id === id){
          temp = i;
          break;
      }
    }

    this.notes.splice(temp, 1);
  },

  updateNoteContent(id, updatedContent) {
    const note = this.notes.find(n => n.id === id);
    // const note = this.notes.find(function(n) { return n.id === id});
    if(!note) return null;

    for(const key in updatedContent) {
      note[key] = updatedContent[key]; 
    }
    return note;
  },

  updateNotePriority(id, priority) {
    let obj = notepad.findNoteById(id);
    obj.priority = priority;
  },

  filterNotesByQuery(query) {
    const temp = [];
    query = query.toLowerCase();

    for(const obj of this.notes){
      if(obj.body.toLowerCase().includes(query) || obj.title.toLowerCase().includes(query)){
        temp.push(obj);
      }
    }
    return temp;
  },
  
  filterNotesByPriority(priority) {
    const temp = [];
    for(const obj of this.notes){
      if(obj.priority === priority){
        temp.push(obj);
      }
    }
    return temp;
  }
};

notepad.saveNote({
  id: 'id-1',
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: Priority.HIGH,
});

notepad.saveNote({
  id: 'id-2',
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Priority.LOW,
});


console.log('Все текущие заметки: ' );
let notes = notepad.getNotes();
notepad.printNotes(notes);

notepad.updateNotePriority('id-4', Priority.NORMAL);

console.log('Заметки после обновления приоритета для id-4: ');
notes = notepad.getNotes();
notepad.printNotes(notes);


notepad.updateNotePriority('id-3', Priority.LOW);

console.log('Заметки после обновления приоритета для id-3: ');
notes = notepad.getNotes();
notepad.printNotes(notes);

/*
 * Решил отфильтровать заметки по слову html
 */

console.log('Отфильтровали заметки по ключевому слову "html": ');
console.log(notepad.filterNotesByQuery('html'));

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-3: ');
  notes = notepad.getNotes();
  notepad.printNotes(notes);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-3');
console.log('Заметки после удаления с id -2: ');
notes = notepad.getNotes();
notepad.printNotes(notes);