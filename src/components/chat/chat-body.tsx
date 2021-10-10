import { ReactElement, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IMessageFirebase } from "../../redux/reducers/chat/chat.models";
import {
  selectChat,
  selectFirstMessageUid,
  selectMessages,
  selectScrollHeight,
} from "../../redux/reducers/chat/chat.selector";
import { toJsDateAndTimeFromFirestoreDate } from "../../utils/firebase";
import { onSnapshot } from "@firebase/firestore";

import customerFemale from "../../assets/Icons/customerFemale.svg";
import customerService from "../../assets/Icons/customerService.svg";
import {
  addMessageAction,
  addMoreMessagesAtTopAction,
  modifyMessageAction,
  modifyScrollHeightAction,
  setMessagesAction,
  updateFirstMessageUidAction,
} from "../../redux/reducers/chat/chat.actions";
import { selectUuid } from "../../redux/uuid/auth.selector";
import {
  collectionMyMessagesRef,
  getTenMessages,
} from "./../../redux/reducers/chat/chat.utils";

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

  function Message({ notMe, msg, createdAt }: IMessage): ReactElement {
    return (
      <div className={notMe ? "my-message" : "peer-message"}>
        <div>
          {msg}
          <div className="text-xs mt-1">
            {toJsDateAndTimeFromFirestoreDate(createdAt).atTime}
          </div>
        </div>
        <img
          src={notMe ? customerFemale : customerService}
          alt={notMe ? "me" : "peer"}
          className={notMe ? "my-message-image" : "peer-message-image"}
        />
      </div>
    );
  }
  useEffect(() => {
    (async () => {
      const [messages, lastLoadedMessageDocument] = await getTenMessages();
      dispatch(setMessagesAction(messages, lastLoadedMessageDocument));

      dispatch(
        modifyScrollHeightAction(messagesContainerRef?.current.scrollHeight)
      );
      scrollChatToMostBottom();
    })();
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
  }, [dispatch, myUuid, firstMessageUid]);

  const scrollChatToMostBottom = () => {
    // console.log("scrollChatToMostBottom");
    return scrollTo(messagesContainerRef?.current.scrollHeight);
  };

  const scrollTo = (position: number) => {
    console.log(position);
    messagesContainerRef?.current.scrollTo(0, position);
  };

  async function fetchMoreMessagesAtMostTop(event: any) {
    // console.log("event.target.scrollHeight", event.target.scrollHeight);
    // console.log("event.target.scrollTop", event.target.scrollTop);

    console.log({
      "messagesContainerRef?.current.scrollHeight":
        messagesContainerRef?.current.scrollHeight,
    });

    const scrollMostTopPosition = event.target.scrollTop === 0;

    if (scrollMostTopPosition && willFetchMoreMessages()) {
      const [messages, lastLoadedMessageDocument] = await getTenMessages();

      dispatch(addMoreMessagesAtTopAction(messages, lastLoadedMessageDocument));
      dispatch(updateFirstMessageUidAction());
    }
  }

  useEffect(() => {
    fixScrollAtSamePositionAfterFetchingMoreMessages();
  }, [messages]);

  function fixScrollAtSamePositionAfterFetchingMoreMessages() {
    // console.log("fixScrollAtSamePositionAfterFetchingMoreMessages");
    // console.log({
    //   scrollHeight,
    //   height: messagesContainerRef?.current.scrollHeight,
    //   firstMessageUid,
    //   messages,
    // });

    // console.log(
    //   "scrollHeight !== messagesContainerRef?.current.scrollHeight",
    //   scrollHeight !== messagesContainerRef?.current.scrollHeight
    // );
    // console.log(
    //   "firstMessageUid !== messages[0]?.msgId",
    //   firstMessageUid !== messages[0]?.msgId
    // );
    if (
      scrollHeight !== messagesContainerRef?.current.scrollHeight &&
      firstMessageUid !== messages[0]?.msgId
    ) {
      // console.log("here");
      const perviousScrollHeight = scrollHeight;
      // const currentScrollHeight =
      //   messagesContainerRef?.current.scrollHeight - perviousScrollHeight;

      console.log({
        // perviousScrollHeight,
        // currentScrollHeight,
        "messagesContainerRef?.current.scrollHeight":
          messagesContainerRef?.current.scrollHeight,
      });
      const ascsac = messagesContainerRef?.current.scrollHeight;

      dispatch(
        modifyScrollHeightAction(messagesContainerRef?.current.scrollHeight)
      );
      scrollTo(
        messagesContainerRef?.current.scrollHeight - perviousScrollHeight
      );
    }
  }

  function willFetchMoreMessages(): boolean {
    const lastLoadedMessageDocument = chat.lastLoadedMessageDocument;
    const messagesCount = chat.messages.length;

    const allMessagesLoaded =
      lastLoadedMessageDocument === undefined && messagesCount > 0;
    return myUuid !== "" && !allMessagesLoaded;
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
          createdAt={message.createdAt}
        />
      ))}
    </div>
  );
};
export default ChatBody;