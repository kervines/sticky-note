const workspace = document.querySelector('.container-stickys');
const btnAdd = document.querySelector('#add-sticky');

getNotes().forEach((note) => {
  const noteEl = createNote(note.id, note.content);
  workspace.insertBefore(noteEl, btnAdd);
});

function createNote(id, content) {
  const element = document.createElement('textarea');
  element.classList.add('note');
  element.value = content;

  element.addEventListener('dblclick', () => {
    const warning = confirm('Do you want to delete this note?');
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener('input', () => {
    updateNote(id, element.value);
  });

  return element;
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);
  saveNote(notes);
  workspace.removeChild(element);
}

function updateNote(id, content) {
  const notes = getNotes();
  const [target] = notes.filter((note) => note.id == id);
  target.content = content;
  saveNote(notes);
}

const addNote = () => {
  const notes = getNotes();
  const noteObj = { id: Math.floor(Math.random() * 1000), content: '' };
  const noteElement = createNote(noteObj.id, noteObj.content);
  workspace.insertBefore(noteElement, btnAdd);

  notes.push(noteObj);
  saveNote(notes);
};

function saveNote(note) {
  localStorage.setItem('note-app', JSON.stringify(note));
}

function getNotes() {
  return JSON.parse(localStorage.getItem('note-app') || '[]');
}

btnAdd.addEventListener('click', addNote);
