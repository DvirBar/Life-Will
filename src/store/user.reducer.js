const initialState = {
  users: [],
};

export function userReducer(state = initialState, action) {
  let newState = state;

  switch (action.type) {
    case "ADD_USER":
      newState = { ...state, users: [...state.users, action.savedUser] };
      console.log(newState);
      break;

    default:
  }
  window.userState = newState;
  return newState;
}
