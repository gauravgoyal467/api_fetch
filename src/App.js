import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => setItems(data))
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchItems();
  }, []);

  return (
    <div className="todo-List">
      <h1>Todo List fetched from https://jsonplaceholder.typicode.com/todos</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
