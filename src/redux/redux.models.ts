import { IChatState } from "./reducers/chat/chat.models";
import { IAuthState } from "./uuid/auth.models";

export interface IAction<T> {
  type: string;
  payload?: T;
}

export interface IRootReducer {
  chat: IChatState;
  auth: IAuthState;
}
