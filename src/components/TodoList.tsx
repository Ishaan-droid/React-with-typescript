import React from "react";
import "./TodoList.css";

interface TodoProps {
  items: { id: string; text: string }[];
  deleteID: (id: string) => void;
}

const TodoList: React.FC<TodoProps> = (props) => {
  const deleteTodoHandler = (id: string) => {
    props.deleteID(id);
  };

  return (
    <ul>
      {props.items.map((cur) => (
        <li key={cur.id}>
          <span> {cur.text}</span>
          <button onClick={() => deleteTodoHandler(cur.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
