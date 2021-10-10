import {
  DocumentData,
  QueryDocumentSnapshot,
} from "../../../node_modules/firebase/firestore/dist/firestore";

export interface IChatState {
  messages: IMessageFirebase[];
  lastLoadedMessageDocument?: QueryDocumentSnapshot<DocumentData>;
  scrollHeight: number;
  firstMessageUid: string;
}

export interface IMessageFirebase {
  msgId: string;
  senderId: string;
  text: string;
  createdAt: Date;
}
