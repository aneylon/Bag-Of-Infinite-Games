import { useState } from "react";
import NoteList from "./NoteList";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNote, setNewNote] = useState("");
  const addNewNote = () => {
    // TODO: add dates
    // created
    // modified
    setNotes([
      ...notes,
      { title: newNoteTitle, body: newNote, id: notes.length + 1 },
    ]);
    setNewNote("");
    setNewNoteTitle("");
  };
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <h2>Add Note</h2>
        <input
          type="text"
          placeholder="Note Title"
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
        />
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNewNote}>Add new Note</button>
      </div>
      <NoteList notes={notes} />
    </div>
  );
};
export default Notes;
