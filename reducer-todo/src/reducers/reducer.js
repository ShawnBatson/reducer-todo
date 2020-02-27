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
    default:
      return state;
  }
};
