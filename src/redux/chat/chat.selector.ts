import { createSelector } from "reselect";
import { IRootReducer } from "../redux.models";
import { IChatState, IMessageFirebase } from "./chat.models";
import { sub } from "date-fns";

export const selectChat = (state: IRootReducer) => state.chat;

export const selectMessages = createSelector(
  [selectChat],
  (chat: IChatState) => chat.messages
);

export const selectScrollHeight = createSelector(
  [selectChat],
  (chat: IChatState) => chat.scrollHeight
);

export const selectFirstMessageUid = createSelector(
  [selectChat],
  (chat: IChatState) => chat.firstMessageUid
);

export const selectIsChatButtonShown = createSelector(
  [selectMessages],

  (messages: IMessageFirebase[]) => {
    if (!messages.length) return false;
    const lastMessageIndex: number = messages.length - 1;
    const lastMessageTime: number = new Date(
      messages[lastMessageIndex].createdAt.seconds * 1000
    ).getTime();
    const expireSessionTime: number = sub(Date.now(), { hours: 4 }).getTime();

    return lastMessageTime > expireSessionTime;
  }
);

export const selectIsChatShown = createSelector(
  [selectChat],
  (chat: IChatState) => chat.isChatShown
);
