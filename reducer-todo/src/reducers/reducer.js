export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const simpleReducer = (state, action) => {
  switch (action.type) {
    case "AddTodo":
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: action.payload, completed: false, id: new Date() }
        ]
      };

    case "CLEAR":
      let clearId = state.todos.filter(todo => {
        return todo.completed === false;
      });
      console.log("this is in clear", clearId);
      return { todos: clearId };

    case "TOGGLE":
      // vv this creates a new mutable array
      let newArray = [...state.todos];
      //vv this finds the index of the specific array item compared to what I click
      let toDoId = state.todos.findIndex(todo => {
        return todo.id === action.payload;
      });
      //this toggles v
      newArray[toDoId].completed = !newArray[toDoId].completed;
      //this toggles ^
      console.log(toDoId);
      //vv this returns the new array. along with the rest of the state to toggle
      return { ...state, todos: newArray };
    default:
      return state;
  }
};
