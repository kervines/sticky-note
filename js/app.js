const container = document.querySelector('.container-stickys');
const btnAddSticky = document.querySelector('#add-sticky');

const stickyLocalStorage = (text) => {
  localStorage.setItem('sticky', text);
};

const createStickyNote = () => {
  const textArea = document.createElement('textarea');
  textArea.setAttribute('cols', 30);
  textArea.setAttribute('rows', 10);
  textArea.style.resize = 'none';
  textArea.classList.add('sticky');

  textArea.addEventListener('change', () => {
    console.log(textArea.value);
  });

  container.appendChild(textArea);
  return textArea;
};

btnAddSticky.addEventListener('click', createStickyNote);
