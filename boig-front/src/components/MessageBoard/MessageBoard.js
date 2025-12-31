import MessageBoardListItem from "./MessageBoardListItem";
import MessageBoardMessage from "./MessageBoardMessage";
import NewMessageBoardMessage from "./NewMessageBoardMessage";

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
      <NewMessageBoardMessage parentId={234} />
      <MessageBoardMessage message={message} />
      <MessageBoardListItem message={message} />
    </div>
  );
};

export default MessageBoard;
