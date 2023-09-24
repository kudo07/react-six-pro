import { useState } from "react";
import "./Todo.css";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
      //   after writing and submitting the input box will be empty
    }
  };
  const deleteTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };
  const editTodo = (id, text) => {
    setEditMode(true);
    setEditId(id);
    setEditValue(text);
  };
  const edit1TodoUpdateTodo = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editId) {
        return { ...todo, text: editValue };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditMode(false);
    setEditId(null);
    setEditValue("");
  };
  return (
    <div className="todo-container">
      <h2>ToDo List</h2>
      <input
        type="text"
        value={inputValue}
        // in value the inputValue will change into the setInoutValue
        onChange={(e) => setInputValue(e.target.value)}
      />
      {editMode ? (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={edit1TodoUpdateTodo}>UPDATE</button>
        </div>
      ) : (
        <button onClick={addTodo}>ADD </button>
      )}

      {/* we initialised the function so that when click the add button we add the data sequeced wise */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <div>
              <button onClick={() => deleteTodo(todo.id)}>DELETE </button>
              <button onClick={() => editTodo(todo.id, todo.text)}>
                EDIT{" "}
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* we write the jsx so we write in {} */}
    </div>
  );
};

export default Todo;
