import ReactDOM from "react-dom";
import React from "react";

const TodoHeader = ({ onChangeText, onCreateTodo, todo }) => (
  <div>
    <h1>TodoHeader</h1>
    <input type="text" value={todo.get("text")} onChange={onChangeText} />
    <button onClick={onCreateTodo}>送出</button>
  </div>
);

export default TodoHeader;
