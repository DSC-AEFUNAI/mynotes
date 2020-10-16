const el = (sel) => document.querySelector(sel);
const appContainer = el('#app-container');
const editor = el('#editor');

const createNote = () => {
  editor.style.display = 'block';
  appContainer.classList.add('covered');
}

const closeEditor = () => {
  editor.style.display = 'none';
  appContainer.classList.remove('covered');
}