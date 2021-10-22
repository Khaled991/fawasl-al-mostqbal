<<<<<<< HEAD:src/redux/chat/chat.actions.ts
import {
  DocumentData,
  QueryDocumentSnapshot,
} from "../../../node_modules/firebase/firestore/dist/firestore";
import { IAction } from "../redux.models";
import { IMessageFirebase } from "./chat.models";
import { chatActionTypes } from "./chat.types";
=======
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { IAction } from '../redux.models';
import { IMessageFirebase } from './chat.models';
import { chatActionTypes } from './chat.types';
>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067:src/redux/reducers/chat/chat.actions.ts

export const setMessagesAction = (
  messages: IMessageFirebase[],
  lastLoadedMessageDocument: QueryDocumentSnapshot<DocumentData>
): IAction<any> => ({
  type: chatActionTypes.SET_MESSAGES,
  payload: { messages, lastLoadedMessageDocument },
});

export const addMessageAction = (message: IMessageFirebase): IAction<any> => ({
  type: chatActionTypes.ADD_MESSAGE,
  payload: message,
});

export const modifyMessageAction = (
  message: IMessageFirebase
): IAction<any> => ({
  type: chatActionTypes.MODIFY_MESSAGE,
  payload: message,
});

export const addMoreMessagesAtTopAction = (
  messages: IMessageFirebase[],
  lastLoadedMessageDocument: QueryDocumentSnapshot<DocumentData>
): IAction<any> => ({
  type: chatActionTypes.ADD_MORE_MESSAGES_AT_TOP,
  payload: { messages, lastLoadedMessageDocument },
});

export const modifyScrollHeightAction = (
  scrollHeight: number
): IAction<any> => ({
  type: chatActionTypes.MODIFY_SCROLL_HEIGHT,
  payload: scrollHeight,
});

export const updateFirstMessageUidAction = (): IAction<any> => ({
  type: chatActionTypes.UPDATE_FIRST_MESSAGE_UID,
});

export const toggleChatAction = (): IAction<undefined> => ({
  type: chatActionTypes.TOGGLE_IS_CHAT_SHOWN,
});
