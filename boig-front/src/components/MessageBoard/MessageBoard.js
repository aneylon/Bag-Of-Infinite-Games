import MessageBoardMessage from "./MessageBoardMessage";

const MessageBoard = () => {
  const message = {
    id: 1,
    title: "a title",
    body: "message body",
    dateAdded: "1/2/2023",
    dateModified: "2/3/2024",
    author: "some dude",
  };
  return (
    <div>
      <h1>Message Board</h1>
      <MessageBoardMessage message={message} />
    </div>
  );
};

export default MessageBoard;
