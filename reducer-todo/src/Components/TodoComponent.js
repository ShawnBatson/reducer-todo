import React, { useState, useReducer } from "react";
import { initialState, simpleReducer } from "../reducers/reducer";
import "./Todo.css";

const ToDoComponent = () => {
  const [newTodo, setNewTodo] = useState("");

  const [state, dispatch] = useReducer(simpleReducer, initialState);

  const handleChanges = event => {
    event.preventDefault();
    setNewTodo(event.target.value);
    console.log(newTodo);
  };

  const addTodo = event => {
    event.preventDefault();
    dispatch({ type: "AddTodo", payload: newTodo });
    setNewTodo("");
    console.log("this is state", state);
  };

  const clearTodo = completed => {
    dispatch({ type: "CLEAR", payload: completed });
  };

  const toggleTodo = id => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  return (
    <>
      <div>
        <h1> Shawn's To Do List</h1>
      </div>
      <form className="todoForm" onSubmit={addTodo}>
        <label>
          <input
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={handleChanges}
          />
        </label>
        <button type="submit">Add</button>
        <button type="submit" onClick={() => clearTodo()}>
          Clear
        </button>
      </form>
      <div>
        {state.todos.map(task => {
          return (
            <div
              className={`taskContainer${task.completed ? " completed" : ""}`}
              onClick={() => toggleTodo(task.id)}
            >
              <div className="taskContainer">
                <p>{task.item}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToDoComponent;
