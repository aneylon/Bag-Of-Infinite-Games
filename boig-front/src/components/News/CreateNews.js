import { useState } from "react";
import { useNavigate } from "react-router";

const CreateNews = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const author = "admin"; // TODO :get user name from logged in user

  const addNews = (e) => {
    e.preventDefault();
    const date = new Date();
    const formattedDate = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    let newNewsItem = {
      title,
      body,
      author,
      date: formattedDate,
    };
    setIsPending(true);
    setTimeout(() => {
      fetch("http://localhost:8000/news", {
        method: "POST",
        body: JSON.stringify(newNewsItem),
      })
        .then((res) => {
          if (res.ok) {
            setBody("");
            setTitle("");
            // navigate("/");
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
      setIsPending(false);
    }, 1000);
  };
  return (
    <div>
      <h1>Create News</h1>
      <form onSubmit={addNews}>
        <label htmlFor="title">Title :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isPending}
          required
        />
        <label htmlFor="body">Body :</label>
        <textarea
          type="text"
          id="body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          disabled={isPending}
          required
        />
        <input type="submit" value="add" disabled={isPending} />
      </form>
    </div>
  );
};
export default CreateNews;
