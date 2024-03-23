const container = document.querySelector('.container-stickys');
const btnAdd = document.querySelector('#add-sticky');

const addNote = () => {
  const element = document.createElement('textarea');
  container.appendChild(element);
};
btnAdd.addEventListener('click', addNote);
