import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([
    { id: "t1", text: "Finish the course." },
  ]);

  const todoAddHandler = (text: string) => {
    setTodos((prevValue) => {
      return [...prevValue, { id: String(Math.random()), text }];
    });
  };

  const deleteTodoID = (todoId: string) => {
    setTodos((prevValue) => prevValue.filter((cur) => cur.id !== todoId));
  };

  // const todos = [{ id: "t1", text: "Finish the course." }];
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} deleteID={deleteTodoID} />
    </div>
  );
};

export default App;
