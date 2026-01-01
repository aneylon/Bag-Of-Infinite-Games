import { useState } from "react";

const SubmitNewBug = () => {
  const [newBug, setNewBug] = useState("");
  const submitNewBug = () => {
    console.log("send to server", newBug);
    // send:
    // text
    // user id
    // date / time
    setNewBug("");
  };
  return (
    <div>
      <h1>New Bug</h1>
      <textarea
        name="newBug"
        id="newBug"
        value={newBug}
        onChange={(e) => setNewBug(e.target.value)}
      ></textarea>
      <button onClick={submitNewBug}>Submit bug</button>
    </div>
  );
};

export default SubmitNewBug;
