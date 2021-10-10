import { IMessageFirebase } from "./chat.models";
import { v4 as uuidv4 } from "uuid";
import {
  collection,
  doc,
  limit,
  getDocs,
  orderBy,
  query,
  writeBatch,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
} from "@firebase/firestore";
import { firestore } from "../../../utils/firebase";
import { store } from "./../../store";

export async function sendMessageToFireStore(
  myMessageText: string,
  myUuid: string
) {
  const myMessage: IMessageFirebase = createMessageFirebaseObjectFromText(
    myMessageText,
    myUuid
  );

  const batch = writeBatch(firestore);

  const chatMessagesRef = doc(
    firestore,
    "chats",
    myUuid,
    "chatMessages",
    myMessage.msgId
  );
  batch.set(chatMessagesRef, myMessage);

  const lastMessageSentRef = doc(firestore, "chats", myUuid);
  batch.set(lastMessageSentRef, { lastMessageSent: myMessage.msgId });

  await batch.commit();
}

const createMessageFirebaseObjectFromText = (
  myMessageText: string,
  myUuid: string
): IMessageFirebase => {
  return {
    msgId: uuidv4(),
    senderId: myUuid,
    text: myMessageText,
    createdAt: new Date(),
  };
};

export function modifyMessagesState(
  modifiedMessage: IMessageFirebase,
  messagesBeforeModification: IMessageFirebase[]
) {
  return messagesBeforeModification.map((message) =>
    message.msgId === modifiedMessage.msgId ? modifiedMessage : message
  );
}

export const collectionMyMessagesRef = (myUuid: string) =>
  collection(firestore, "chats", myUuid, "chatMessages");

export const getMoreTenMessagesQuery = () => {
  return query(
    collectionMyMessagesRef(store.getState().auth.uuid),
    orderBy("createdAt", "desc"),
    startAfter(store.getState().chat.lastLoadedMessageDocument),
    limit(10)
  );
};

export const getLastTenMessagesQuery = () => {
  return query(
    collectionMyMessagesRef(store.getState().auth.uuid),
    orderBy("createdAt", "desc"),
    limit(10)
  );
};

export async function getTenMessages(): Promise<
  [IMessageFirebase[], QueryDocumentSnapshot<DocumentData>]
> {
  const lastLoadedMessageDocument =
    store.getState().chat.lastLoadedMessageDocument;

  const messagesDocSnap = await getDocs(
    lastLoadedMessageDocument
      ? getMoreTenMessagesQuery()
      : getLastTenMessagesQuery()
  );

  const messages: IMessageFirebase[] = messagesDocSnap.docs.map(
    (doc) => doc.data() as IMessageFirebase
  );

  const lastLoadedMessageDocumentIndex = messagesDocSnap.docs.length - 1;

  return [
    messages.reverse(),
    messagesDocSnap.docs[lastLoadedMessageDocumentIndex],
  ];
}
