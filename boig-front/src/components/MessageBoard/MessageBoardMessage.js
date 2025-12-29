const MessageBoardMessage = ({ message }) => {
  return (
    <div>
      <h1>{message.title}</h1>
      <p>{message.body}</p>
      <p>added : {message.dateAdded}</p>
      <p>modified : {message.dateModified}</p>
      <p>author: {message.author}</p>
    </div>
  );
};

export default MessageBoardMessage;
