import { INIT_SOCKET, CLOSE_SOCKET } from "../types";

export function initSocketAction(url) {
  return (dispatch) => {
    dispatch(initSocket(url));
  };
}
const initSocket = (url) => ({
  type: INIT_SOCKET,
  payload: url,
});

export function closeSocketAction(user) {
  return (dispatch) => {
    dispatch(closeSocket(user));
  };
}

const closeSocket = (user) => ({
  type: CLOSE_SOCKET,
  payload:user
});
