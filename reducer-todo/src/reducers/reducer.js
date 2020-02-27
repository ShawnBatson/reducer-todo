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
    case "TOGGLE":
      return {
        todos: state.todos.map(todo => {
          if (state.todos.id === todo.id) {
            return {
              ...state,
              completed: !state.completed
            };
          }
          return state;
        })
      };
    default:
      return state;
  }
};

//   return state.todos.map(todo => {
//     if (todo.id !== action.id) {
//       return todo;
//     } else {
//       return {
//         ...todo,
//         completed: !todo.completed
//       };
//     }
//   });
