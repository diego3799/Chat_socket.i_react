import { combineReducers } from "redux";

import socketReducer from "./socketReducer";
import sessionReducer from "./sessionReducer";

export default combineReducers({
  socket: socketReducer,
  session: sessionReducer,
});
