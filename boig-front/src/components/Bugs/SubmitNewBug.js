import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import useFetch from "../../hooks/useFetch";

const SubmitNewBug = () => {
  const { user } = useAuthContext();
  const [newBug, setNewBug] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const submitNewBug = () => {
    const userId = user ? user._userId : 0;
    console.log("send", user, newBug);
    fetch("/Bugs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, description: newBug }),
    })
      .then((res) => {
        if (res.ok) {
          setShowThankYou(true);
          setNewBug("");
        } else {
          setError(res.message);
        }
        setIsPending(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsPending(false);
      });
  };
  return (
    <div>
      <h1>New Bug</h1>
      <textarea
        name="newBug"
        id="newBug"
        value={newBug}
        onChange={(e) => {
          setNewBug(e.target.value);
          setShowThankYou(false);
        }}
        disabled={isPending}
      ></textarea>
      <button onClick={submitNewBug} disabled={isPending || newBug === ""}>
        Submit bug
      </button>
      {isPending && <div>Loading...</div>}
      {showThankYou && <div>Thank you for your submission.</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default SubmitNewBug;
