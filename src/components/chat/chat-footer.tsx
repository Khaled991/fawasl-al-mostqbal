import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";

import sendIcon from "../../assets/Icons/send.svg";
import attachImageIcon from "../../assets/Icons/attachImage.svg";
import { sendMessageToFireStore } from "../../redux/reducers/chat/chat.utils";
import { selectUuid } from "../../redux/uuid/auth.selector";

// interface IChatFooterProps {}

const ChatFooter = (): // {}: IChatFooterProps
ReactElement => {
  const myUuid = useSelector(selectUuid);
  const [inputMessage, setInputMessage] = useState<string>("");

  const onTypingMessage = ({ target: { value: typingMessage } }: any) =>
    setInputMessage(typingMessage);

  const onPressEnterKey = ({ key }: any) => {
    if (key === "Enter") {
      handleSendingMessage();
    }
  };

  const handleSendingMessage = () => {
    if (inputMessage !== "") {
      sendMessageToFireStore(inputMessage, myUuid);

      resetMessageState();
    }
  };

  const resetMessageState = () => setInputMessage("");

  return (
    <div className="border-t border-primary border-solid flex items-center pt-2">
      <img
        src={sendIcon}
        alt="send"
        className="w-6 cursor-pointer rounded mr-2"
        onClick={handleSendingMessage}
      />
      <div className="flex-1 border-solid border border-primary rounded-xl w-full px-2 py-2 text-right flex">
        <img
          src={attachImageIcon}
          alt="attach"
          className="w-6 cursor-pointer rounded mr-2"
        />
        <input
          type="text"
          className="flex-1"
          placeholder="اكتب رسالة ..."
          dir="rtl"
          onChange={onTypingMessage}
          onKeyDown={onPressEnterKey}
          value={inputMessage}
        />
      </div>
    </div>
  );
};
export default ChatFooter;
