<<<<<<< HEAD
import { IChatState } from "./chat/chat.models";
import { IAuthState } from "./auth/auth.models";
=======
import { IChatState } from './chat/chat.models';
import { IAuthState } from './uuid/auth.models';
>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067

export interface IAction<T> {
  type: string;
  payload?: T;
}

export interface IRootReducer {
  chat: IChatState;
  auth: IAuthState;
}
