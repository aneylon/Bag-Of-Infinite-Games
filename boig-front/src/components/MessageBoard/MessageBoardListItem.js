const MessageBoardListItem = ({ message }) => {
  return (
    <div>
      <p>
        <strong>
          <span>{message.title} : </span>
        </strong>
        <span>{message.author} : </span>
        <span>{message.dateAdded}</span>
      </p>
    </div>
  );
};

export default MessageBoardListItem;
