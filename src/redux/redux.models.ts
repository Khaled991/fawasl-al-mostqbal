import { IChatState } from "./chat/chat.models";
import { IAuthState } from "./auth/auth.models";

export interface IAction<T> {
  type: string;
  payload?: T;
}

export interface IRootReducer {
  chat: IChatState;
  auth: IAuthState;
}
