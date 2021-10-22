import { combineReducers } from "redux";
import chatReducer from "./chat/chat.reducer";
import { IRootReducer } from "./redux.models";
import { authReducer } from "./uuid/auth.reducer";

const rootReducer = combineReducers<IRootReducer>({
  chat: chatReducer,
  auth: authReducer,
});

export default rootReducer;
