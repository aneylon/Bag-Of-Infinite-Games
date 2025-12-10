import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
// TODO : Define base url in env settings
// const baseUrl = process.env.baseUrl

const useFetch = (url, method, body) => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { user } = useContext(AuthContext);
  let headers = {
    "Content-Type": "application/json",
  };
  if (user) {
    headers = { ...headers, Authorization: `Bearer ${user.authToken}` };
  }

  useEffect(() => {
    setIsPending(true);
    fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
        console.error(error);
      });
  }, []);

  return { data, error, isPending };
};

export default useFetch;

const methods = {
  GET: "GET",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};
export { methods };
