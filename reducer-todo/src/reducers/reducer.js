export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

export const simpleReducer = (state, action) => {
  switch (action.type) {
    case "AddTodo":
      return { ...state, item: action.payload, id: new Date() };
    default:
      return state;
  }
};
