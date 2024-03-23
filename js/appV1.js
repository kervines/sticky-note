const workspace = document.querySelector('.container-stickys');
const btnAdd = document.querySelector('#add-sticky');

function colorsRandom() {
  const colors = ['#FF8080', '#FFCF96', '#F6FDC3', '#CDFAD5'];
  const random = Math.floor(Math.random() * 4);
  return colors[random];
}

getNotes().forEach((note) => {
  const noteEl = createNote(note.id, note.content, note.color);
  workspace.insertBefore(noteEl, btnAdd);
});

function createNote(id, content, color) {
  const div = document.createElement('div');
  div.classList.add('container-note');

  const element = document.createElement('textarea');
  element.classList.add('note');

  element.value = content;
  element.style.backgroundColor = color;
  div.appendChild(element);

  const btnClose = document.createElement('button');
  btnClose.classList.add('close');
  btnClose.innerHTML = '<i class="fa-solid fa-x"></i>';
  div.appendChild(btnClose);
  console.log(btnClose);

  btnClose.addEventListener('click', () => {
    const warning = confirm('Do you want to delete this note?');
    if (warning) {
      deleteNote(id, div);
      btnClose.remove();
    }
  });

  element.addEventListener('input', () => {
    updateNote(id, element.value);
  });

  return div;
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
  const noteObj = {
    id: Math.floor(Math.random() * 1000),
    content: '',
    color: colorsRandom(),
  };
  const noteElement = createNote(noteObj.id, noteObj.content, noteObj.color);
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
