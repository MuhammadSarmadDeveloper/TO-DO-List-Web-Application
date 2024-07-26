import React from 'react';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(index)}>{todo.text}</span>
      <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
    </div>
  );
}

export default TodoItem;
