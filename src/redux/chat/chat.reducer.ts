<<<<<<< HEAD:src/redux/chat/chat.reducer.ts
import { chatActionTypes } from "./chat.types";
import { IChatState } from "./chat.models";
import { IAction } from "../redux.models";
import { modifyMessagesState } from "./chat.utils";
=======
import { chatActionTypes } from './chat.types';
import { IChatState } from './chat.models';
import { IAction } from '../redux.models';
import { modifyMessagesState } from './chat.utils';
>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067:src/redux/reducers/chat/chat.reducer.ts

const INITIAL_STATE: IChatState = {
  messages: [],
  lastLoadedMessageDocument: undefined,
  scrollHeight: 0,
  firstMessageUid: '',
  isChatShown: false,
};

const chatReducer = (
  state: IChatState = INITIAL_STATE,
  action: IAction<any>
): IChatState | any => {
  switch (action.type) {
    case chatActionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case chatActionTypes.SET_MESSAGES:
      return {
        ...state,
        ...action.payload,
        firstMessageUid: action.payload.messages.length
          ? action.payload.messages[0].msgId
          : '',
      };

    case chatActionTypes.MODIFY_MESSAGE:
      return {
        ...state,
        messages: modifyMessagesState(action.payload, state.messages),
      };

    case chatActionTypes.ADD_MORE_MESSAGES_AT_TOP:
      return {
        ...state,
        messages: [...action.payload.messages, ...state.messages],
        lastLoadedMessageDocument: action.payload.lastLoadedMessageDocument,
      };

    case chatActionTypes.MODIFY_SCROLL_HEIGHT:
      return {
        ...state,
        scrollHeight: action.payload,
      };
    case chatActionTypes.UPDATE_FIRST_MESSAGE_UID:
      return {
        ...state,
        firstMessageUid: state.messages[0].msgId,
      };

    case chatActionTypes.TOGGLE_IS_CHAT_SHOWN:
      return {
        ...state,
        isChatShown: !state.isChatShown,
      };

    default:
      return state;
  }
};

export default chatReducer;
