import { ADD_USER, SET_ROOM_ID } from "../types";

export function addUserAction(user) {
  return (dispatch) => {
    dispatch(addUser(user));
  };
}
const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});
export function addRoomIdAction(id) {
  return (dispatch) => {
    dispatch(addRoomId(id));
  };
}
const addRoomId = (id) => ({
  type: SET_ROOM_ID,
  payload: id,
});
