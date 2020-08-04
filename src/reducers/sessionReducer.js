import { ADD_USER, SET_ROOM_ID } from "../types";

const initialState = {
  user: "",
  room: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_ROOM_ID:
      return {
        ...state,
        room: action.payload,
      };
    default:
      return state;
  }
}
