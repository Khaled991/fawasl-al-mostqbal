<<<<<<< HEAD:src/components/chat/chat-footer.tsx
import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";

import sendIcon from "../../assets/Icons/send.svg";
import attachImageIcon from "../../assets/Icons/attachImage.svg";
import { sendMessageToFireStore } from "../../redux/chat/chat.utils";
import { selectUuid } from "../../redux/auth/auth.selector";
=======
import { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import './ChatFooter.scss';
import SendIcon from '../../../assets/Icons/send.svg';
import AttachImageIcon from '../../../assets/Icons/attachImage.svg';
import { selectUuid } from '../../../redux/uuid/auth.selector';
import { sendMessageToFireStore } from '../../../redux/chat/chat.utils';
>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067:src/components/Chat/ChatFooter/chat-footer.tsx

// interface IChatFooterProps {}

const ChatFooter = (): // {}: IChatFooterProps
ReactElement => {
  const myUuid = useSelector(selectUuid);
  const [inputMessage, setInputMessage] = useState<string>('');

  const onTypingMessage = ({ target: { value: typingMessage } }: any) =>
    setInputMessage(typingMessage);

  const onPressEnterKey = ({ key }: any) => {
    if (key === 'Enter') {
      handleSendingMessage();
    }
  };

  const handleSendingMessage = () => {
    if (inputMessage !== '') {
      sendMessageToFireStore(inputMessage, myUuid);

      resetMessageState();
    }
  };

  const resetMessageState = () => setInputMessage('');

  return (
    <div className="border-t border-primary border-solid flex items-center pt-2">
      <img
        src={SendIcon}
        alt="SendIcon"
        className="chat-send-button"
        onClick={handleSendingMessage}
      />
      <div className="flex-1 border-solid border border-primary rounded-xl w-full px-2 py-2 text-right flex">
        <img
          src={AttachImageIcon}
          alt="AttachImageIcon"
          className="chat-icon-style"
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
