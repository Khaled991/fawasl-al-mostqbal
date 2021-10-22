import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

export interface IChatState {
  messages: IMessageFirebase[];
  lastLoadedMessageDocument?: QueryDocumentSnapshot<DocumentData>;
  scrollHeight: number;
  firstMessageUid: string;
  isChatShown: boolean;
}

export interface IMessageFirebase {
  msgId: string;
  senderId: string;
  text: string;
  createdAt: Timestamp;
}
