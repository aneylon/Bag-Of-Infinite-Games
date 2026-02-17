import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";

const DirectMessage = ({ recipient }) => {
  const { user } = useAuthContext();
  const [newMessage, setNewMessage] = useState("");
  const sendNewMessage = () => {
    let data = {
      recipient,
      sender: user.id,
      newMessage,
    };
    console.log(data);
    // TODO: api call to send new direct message
    setNewMessage("");
  };
  useEffect(() => {
    // TODO : Get exisiting direct messages
  }, []);
  return (
    <div>
      <h1>Direct Message</h1>
      <h2>New Message</h2>
      <textarea
        name="newMessage"
        id="newMessage"
        value={newMessage}
        onChange={(e) => {
          setNewMessage(e.target.value);
        }}
      ></textarea>
      <button onClick={sendNewMessage}>send new message</button>
    </div>
  );
};

export default DirectMessage;
