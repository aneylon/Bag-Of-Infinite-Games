import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

const DirectMessage = ({ recipient }) => {
  const { user } = useAuthContext();
  const [newMessage, setNewMessage] = useState("");
  const sendNewMessage = () => {
    // TODO: api call to send new direct message
    setNewMessage("");
  };
  return (
    <div>
      <h1>Direct Message</h1>
      <h2>New Message</h2>
      <textarea name="newMessage" id="newMessage"></textarea>
      <button onClick={sendNewMessage}>send new message</button>
    </div>
  );
};

export default DirectMessage;
