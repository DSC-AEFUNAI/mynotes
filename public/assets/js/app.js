const el = (sel) => document.querySelector(sel);
const appContainer = el('#app-container');
const editor = el('#editor');
const noteForm = el('#note-form');
const saveNoteButton = el('#save-note');

const createNote = () => {
  editor.style.display = 'block';
  appContainer.classList.add('covered');
}

const closeEditor = () => {
  noteForm.reset();
  saveNoteButton.disabled = false;
  editor.style.display = 'none';
  appContainer.classList.remove('covered');
}

noteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formBody = Object.fromEntries(new FormData(noteForm));
  formBody.date = new Date();
  saveNoteButton.disabled = true;
  firebase.firestore().collection('notes').add(formBody)
    .then(closeEditor)
    .catch((error) => {
      alert(error.message);
    });
});