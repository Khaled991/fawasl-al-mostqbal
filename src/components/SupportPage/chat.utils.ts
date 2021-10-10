import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "@firebase/firestore";
import { firestore } from "../../utils/firebase";
import { IMessageFirebase } from "./../../redux/reducers/chat/chat.models";

const messageRef = collection(firestore, "messages");

export const retrieveMessagesQuery = query(
  messageRef,
  orderBy("createdAt"),
  limit(25)
);

export const getMessages = async (): Promise<IMessageFirebase[]> => {
  const messagesSnapshot = await getDocs(retrieveMessagesQuery);

  const messages: IMessageFirebase[] = [];
  messagesSnapshot.forEach((doc) => {
    const { msgId, senderId, text, createdAt } = doc.data();

    messages.push({ msgId, senderId, text, createdAt: new Date(createdAt) });
  });

  return messages;
};