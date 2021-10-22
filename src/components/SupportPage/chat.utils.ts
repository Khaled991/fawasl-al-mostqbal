import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
<<<<<<< HEAD
} from "@firebase/firestore";
import { firestore } from "../../utils/firebase";
import { IMessageFirebase } from "../../redux/chat/chat.models";
=======
} from '@firebase/firestore';
import { firestore } from '../../utils/firebase';
import { Timestamp } from 'firebase/firestore';
import { IMessageFirebase } from '../../redux/chat/chat.models';
>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067

const messageRef = collection(firestore, 'messages');

export const retrieveMessagesQuery = query(
  messageRef,
  orderBy('createdAt'),
  limit(25)
);

export const getMessages = async (): Promise<IMessageFirebase[]> => {
  const messagesSnapshot = await getDocs(retrieveMessagesQuery);

  const messages: IMessageFirebase[] = [];
  messagesSnapshot.forEach(doc => {
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
