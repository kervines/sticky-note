const container = document.querySelector('.container-stickys');
const btnAddSticky = document.querySelector('#add-sticky');

const stickyLocalStorage = (id, text) => {
  localStorage.setItem('sticky' + id, text);
};

let id = 0;
const createStickyNote = () => {
  const textArea = document.createElement('textarea');
  textArea.setAttribute('cols', 30);
  textArea.setAttribute('rows', 10);
  textArea.style.resize = 'none';
  textArea.classList.add('sticky');

  textArea.addEventListener('change', () => {
    stickyLocalStorage(id, textArea.value);
  });
  container.appendChild(textArea);
  id++;
  return textArea;
};

btnAddSticky.addEventListener('click', createStickyNote);
