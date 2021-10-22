<<<<<<< HEAD
import { ReactElement, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IMessageFirebase } from "../../redux/chat/chat.models";
=======
import { forwardRef, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { onSnapshot } from '@firebase/firestore';

import customerFemale from '../../assets/Icons/customerFemale.svg';
import customerService from '../../assets/Icons/customerService.svg';

import { selectUuid } from '../../redux/uuid/auth.selector';

>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067
import {
  selectChat,
  selectFirstMessageUid,
  selectMessages,
  selectScrollHeight,
<<<<<<< HEAD
} from "../../redux/chat/chat.selector";
import { toJsDateAndTimeFromFirestoreDate } from "../../utils/firebase";
import { onSnapshot } from "@firebase/firestore";

import customerFemale from "../../assets/Icons/customerFemale.svg";
import customerService from "../../assets/Icons/customerService.svg";
=======
} from '../../redux/chat/chat.selector';
import { IMessageFirebase } from '../../redux/chat/chat.models';
>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067
import {
  addMessageAction,
  addMoreMessagesAtTopAction,
  modifyMessageAction,
  modifyScrollHeightAction,
  updateFirstMessageUidAction,
<<<<<<< HEAD
} from "../../redux/chat/chat.actions";
import { selectUuid } from "../../redux/auth/auth.selector";
=======
} from '../../redux/chat/chat.actions';
>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067
import {
  collectionMyMessagesRef,
  formatDate,
  getTenMessages,
<<<<<<< HEAD
} from "../../redux/chat/chat.utils";

const ChatBody = (): ReactElement => {
  const messages: IMessageFirebase[] = useSelector(selectMessages);
  const dispatch: Dispatch = useDispatch();
  const myUuid = useSelector(selectUuid);
  const messagesContainerRef = useRef<any>();
  const chat = useSelector(selectChat);
  const scrollHeight = useSelector(selectScrollHeight);
  const firstMessageUid = useSelector(selectFirstMessageUid);

  interface IMessage {
    notMe: boolean;
    msg: string;
    createdAt: Date;
  }
=======
} from '../../redux/chat/chat.utils';

const ChatBody = forwardRef(
  (props, messagesContainerRef: any): ReactElement => {
    const messages: IMessageFirebase[] = useSelector(selectMessages);
    const dispatch: Dispatch = useDispatch();
    const myUuid = useSelector(selectUuid);
    const chat = useSelector(selectChat);
    const scrollHeight = useSelector(selectScrollHeight);
    const firstMessageUid = useSelector(selectFirstMessageUid);

    interface IMessage {
      notMe: boolean;
      msg: string;
      createdAt: string;
    }
>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067

    function Message({ notMe, msg, createdAt }: IMessage): ReactElement {
      return (
        <div className={notMe ? 'my-message' : 'peer-message'}>
          <div>
            {msg}
            <div className="text-xs mt-1">{createdAt}</div>
          </div>
          <img
            src={notMe ? customerFemale : customerService}
            alt={notMe ? 'me' : 'peer'}
            className={notMe ? 'my-message-image' : 'peer-message-image'}
          />
        </div>
      );
<<<<<<< HEAD
      scrollChatToMostBottom();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!myUuid) return;

    const unsubscribe = onSnapshot(
      collectionMyMessagesRef(myUuid),
      async (snapShot: any) => {
        const changes = snapShot.docChanges();

        changes.forEach((change: any) => {
          if (change.type === "added" && changes.length === 1) {
            dispatch(addMessageAction(change.doc.data()));
            scrollChatToMostBottom();
          } else if (change.type === "modified")
            dispatch(modifyMessageAction(change.doc.data()));
        });
      }
    );

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, myUuid, firstMessageUid]);

  const scrollChatToMostBottom = () => {
    return scrollTo(messagesContainerRef?.current.scrollHeight);
  };

  const scrollTo = (position: number) => {
    messagesContainerRef?.current.scrollTo(0, position);
  };

  async function fetchMoreMessagesAtMostTop(event: any) {
    const scrollMostTopPosition = event.target.scrollTop === 0;
=======
    }
    useEffect(() => {
      if (scrollHeight === messagesContainerRef?.current?.scrollHeight)
        scrollChatToMostBottom();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    useEffect(() => {
      if (!myUuid) return;

      const unsubscribe = onSnapshot(
        collectionMyMessagesRef(myUuid),
        async (snapShot: any) => {
          const changes = snapShot.docChanges();

          changes.forEach((change: any) => {
            if (change.type === 'added' && changes.length === 1) {
              dispatch(addMessageAction(change.doc.data()));
              scrollChatToMostBottom();
            } else if (change.type === 'modified')
              dispatch(modifyMessageAction(change.doc.data()));
          });
        }
      );

      return () => unsubscribe();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, myUuid, firstMessageUid]);

    const scrollChatToMostBottom = () => {
      return scrollTo(messagesContainerRef?.current?.scrollHeight ?? 0);
    };

    const scrollTo = (position: number) => {
      messagesContainerRef?.current?.scrollTo(0, position);
    };

    async function fetchMoreMessagesAtMostTop(event: any) {
      const scrollMostTopPosition = event.target.scrollTop === 0;
>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067

      if (scrollMostTopPosition && willFetchMoreMessages()) {
        const [messages, lastLoadedMessageDocument] = await getTenMessages();

        dispatch(
          addMoreMessagesAtTopAction(messages, lastLoadedMessageDocument)
        );
        dispatch(updateFirstMessageUidAction());
      }
    }

<<<<<<< HEAD
  useEffect(() => {
    fixScrollAtSamePositionAfterFetchingMoreMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  function fixScrollAtSamePositionAfterFetchingMoreMessages() {
    if (
      scrollHeight !== messagesContainerRef?.current.scrollHeight &&
      firstMessageUid !== messages[0]?.msgId
    ) {
      const perviousScrollHeight = scrollHeight;
      dispatch(
        modifyScrollHeightAction(messagesContainerRef?.current.scrollHeight)
      );
      scrollTo(
        messagesContainerRef?.current.scrollHeight - perviousScrollHeight
      );
=======
    useEffect(() => {
      fixScrollAtSamePositionAfterFetchingMoreMessages();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages]);

    function fixScrollAtSamePositionAfterFetchingMoreMessages() {
      if (
        scrollHeight !== messagesContainerRef?.current?.scrollHeight &&
        firstMessageUid !== messages[0]?.msgId
      ) {
        const perviousScrollHeight = scrollHeight;
        // const currentScrollHeight =
        //   messagesContainerRef?.current?.scrollHeight - perviousScrollHeight;

        // const ascsac = messagesContainerRef?.current?.scrollHeight;

        dispatch(
          modifyScrollHeightAction(messagesContainerRef?.current?.scrollHeight)
        );
        scrollTo(
          messagesContainerRef?.current?.scrollHeight - perviousScrollHeight
        );
      }
>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067
    }

    function willFetchMoreMessages(): boolean {
      const lastLoadedMessageDocument = chat.lastLoadedMessageDocument;
      const messagesCount = chat.messages.length;

      const allMessagesLoaded =
        lastLoadedMessageDocument === undefined && messagesCount > 0;
      return myUuid !== '' && !allMessagesLoaded;
    }

    return (
      <div
        className="py-2 text-xl overflow-y-auto flex flex-col"
        ref={messagesContainerRef}
        onScroll={fetchMoreMessagesAtMostTop}
      >
        {messages.map((message: IMessageFirebase) => (
          <Message
            key={message.msgId}
            notMe={message.senderId !== myUuid}
            msg={message.text}
            createdAt={formatDate(new Date(message.createdAt.seconds * 1000))}
          />
        ))}
      </div>
    );
  }
);
export default ChatBody;
