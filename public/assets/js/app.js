const el = (sel) => document.querySelector(sel);
const appContainer = el('#app-container');
const notesContainer = el('#notes-container');
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
};

const displayNote = (id, note) => {
  let isNewNote = false;
  let noteDiv = el(`#note-id-${id}`);
  if (!noteDiv) {
    noteDiv = document.createElement('div');
    noteDiv.id = `note-id-${id}`;
    noteDiv.classList.add('note');
    isNewNote = true;
  }
  // If timestamp is null, assume we've gotten a brand new note.
  // https://stackoverflow.com/a/47781432/4816918
  noteDiv.innerHTML = `
  <div class="note-group">
    <span class="key">Topic:</span>
    <span class="value">${note.topic}</span>
  </div>
  <div class="note-group">
    <span class="key">Subject:</span>
    <span class="value">${note.subject}</span>
  </div>
  <div class="note-group">
    <span class="key">Details:</span>
    <span id="details-value">${note.details.length < 150 ? note.details : (note.details.substring(0, 150) + ' ...')}</span>
  </div>
  <p class="date">${note.timestamp ? new Date(note.timestamp.toMillis()) : new Date()}</p>
  <div class="button-container">
    <button class="text-button">View</button>
  </div>
  `;
  if (isNewNote) {
    notesContainer.insertBefore(noteDiv, notesContainer.children[0]);
    notesContainer.scrollTo(0, 0);
  }
};

const loadNotes = () => {
  firebase.firestore().collection('notes').orderBy('timestamp').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'removed') {
        const deletedNote = el(`#notes-container #note-id-${change.doc.id}`);
        if (deletedNote) {
          deletedNote.parentNode.removeChild(deletedNote);
        }
      } else {
        displayNote(change.doc.id, change.doc.data());
      }
    });
  });
};

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
  formBody.timestamp = firebase.firestore.FieldValue.serverTimestamp();
  saveNoteButton.disabled = true;
  firebase.firestore().collection('notes').add(formBody)
    .then(closeEditor)
    .catch((error) => {
      alert(error.message);
    });
});

loadNotes();