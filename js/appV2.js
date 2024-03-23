const workspace = document.querySelector('.container-stickys');
const btnAdd = document.querySelector('#add-sticky');

function addNote() {
  const obj = {
    id: Math.floor(Math.random() * 100),
    content: '',
  };
  createNote(obj.id, obj.content);
}

function createNote(id, value) {
  const element = document.createElement('textarea');
  element.classList.add('note');
  workspace.appendChild(element);
  element.value = value || '';
  element.addEventListener('input', () => saveNote(element.value));
  return element;
}

function saveNote(content) {
  localStorage.setItem('notesStickys', JSON.stringify(content));
}

function loadNote() {
  const content = JSON.parse(localStorage.getItem('notesStickys'));
  console.log(content);
  if (content === null) return;
  createNote(content);
}
loadNote();

btnAdd.addEventListener('click', addNote);
