import socketIO from "socket.io-client";
import { INIT_SOCKET, CLOSE_SOCKET } from "../types";
const initialState = {
  socket: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case INIT_SOCKET:
      return {
        ...state,
        socket: socketIO(action.payload),
      };
    case CLOSE_SOCKET:
      state.socket.emit("goodbye",action.payload)
      state.socket.disconnect();
      return {
        ...state,
      };
    default:
      return state;
  }
}
