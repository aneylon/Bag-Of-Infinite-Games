import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import useFetch, { methods } from "../../hooks/useFetch";

const SubmitNewBug = () => {
  const { request, isPending, data, error } = useFetch();
  const { user } = useAuthContext();
  const [newBug, setNewBug] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const submitNewBug = () => {
    const userId = user ? user._userId : 0;
    console.log("send", user, newBug);

    request("/Bugs", methods.POST, { userId, description: newBug });

    // TODO : refactor to figure out how to update showThankYou after successful response.
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
