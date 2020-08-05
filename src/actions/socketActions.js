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

export function closeSocketAction(user, room) {
  return (dispatch) => {
    dispatch(closeSocket(user, room));
  };
}

const closeSocket = (user, room) => ({
  type: CLOSE_SOCKET,
  payload: { user, room },
});
