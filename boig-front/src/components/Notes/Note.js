const Note = ({ note }) => {
  // todo : add note editing
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
    </div>
  );
};
export default Note;
