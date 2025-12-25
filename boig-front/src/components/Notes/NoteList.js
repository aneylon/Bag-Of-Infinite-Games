import NoteListItem from "./NoteListItem";

const NoteList = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteListItem note={note} key={note.id} />
      ))}
    </div>
  );
};
export default NoteList;
