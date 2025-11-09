import { useEffect, useState } from "react";
import { get } from "../api/apiUtils";

export const TestComponent = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    get("https://jsonplaceholder.typicode.com/todos").then((things) => {
      setTodos(things);
    });
  }, []);

  return (
    <div>
      <h1>Test Component</h1>
      <ul>
        <li>{todos.length}</li>
      </ul>
    </div>
  );
};
