<<<<<<< HEAD:src/redux/chat/chat.models.ts
import {
  DocumentData,
  QueryDocumentSnapshot,
} from "../../../node_modules/firebase/firestore/dist/firestore";
=======
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067:src/redux/reducers/chat/chat.models.ts

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
