import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "@firebase/firestore";
import { firestore } from "../../utils/firebase";
import { Timestamp } from "firebase/firestore";
import { IMessageFirebase } from "../../redux/chat/chat.models";

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

    messages.push({
      msgId,
      senderId,
      text,
      createdAt: Timestamp.fromDate(new Date(createdAt)),
    });
  });

  return messages;
};
