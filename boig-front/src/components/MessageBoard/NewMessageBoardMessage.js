import { useState } from "react";

const NewMessageBoardMessage = ({ parentId = 0 }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const submitNewMessage = () => {
    let newMessage = {
      parentId,
      title,
      body,
      // author
      // userId
      // dateAdded
    };
    console.log(newMessage);
    // send new message to server
    //
    setTitle("");
    setBody("");
  };
  return (
    <div>
      <h1>New Message Board Message</h1>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="body"
        id="body"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={submitNewMessage}>Add new message</button>
    </div>
  );
};

export default NewMessageBoardMessage;
