import React, { useState, useReducer } from "react";
import { initialState, simpleReducer } from "../reducers/reducer";

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
    console.log("this is state", state);
    return { ...state };
  };

  return (
    <div>
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
      </form>
      <div>{state.item}</div>
    </div>
  );
};

export default ToDoComponent;
