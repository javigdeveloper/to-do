import React, { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", complete: false },
  ]);

  return (
    <div>
      <TodoList todos={todos} />
      <input type="text"></input>
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </div>
  );
}

export default App;
