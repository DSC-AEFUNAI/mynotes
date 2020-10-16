const el = (sel) => document.querySelector(sel);
const appContainer = el('#app-container');
const editor = el('#editor');
const noteForm = el('#note-form');
const saveNoteButton = el('#save-note');
const detailsTextarea = el('textarea#details');

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

detailsTextarea.addEventListener('keyup', () => {
  const numberOfLineBreaks = (detailsTextarea.value.match(/\n/g) || []).length;
  if (numberOfLineBreaks >= 5) {
    // minheight + lines x line-height + padding + border
    const newHeight = (24 + numberOfLineBreaks * 18) + 2;
    detailsTextarea.style.height = newHeight + 'px';
  }
});

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