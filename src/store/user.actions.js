import { userService } from "../services/user.service.js";

export function addUser(currUser) {
  return async (dispatch) => {
    try {
      const savedUser = await userService.save(currUser);
      const action = { type: "ADD_USER", savedUser };
      dispatch(action);
      return savedUser;
    } catch (err) {
      console.log("Cannot add user", err);
    }
  };
}
