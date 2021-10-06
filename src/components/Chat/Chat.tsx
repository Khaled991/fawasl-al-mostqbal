import { ReactElement } from 'react';
import callIcon from '../../assets/Icons/call.svg';
import xIcon from '../../assets/Icons/x.svg';
import sendIcon from '../../assets/Icons/send.svg';
import attachImageIcon from '../../assets/Icons/attachImage.svg';
import customerFemale from '../../assets/Icons/customerFemale.svg';
import customerService from '../../assets/Icons/customerService.svg';
import formatAMPM from '../../utils/formatAMPM';

const Chat = ({ hideChat }: any): ReactElement => {
  function ChatHeader(): ReactElement {
    return (
      <div className="border-b border-primary border-solid flex justify-between items-center pb-2 cursor-pointer">
        <img
          src={xIcon}
          alt="x"
          className="w-4 cursor-pointer rounded"
          onClick={() => hideChat()}
        />
        <div className="text-xl font-bold">المحادثة</div>
        <img src={callIcon} alt="call" className="w-6 cursor-pointer rounded" />
      </div>
    );
  }
  function ChatMessages(): ReactElement {
    interface IMessage {
      isMe: boolean;
      msg: string;
      time: Date;
    }

    function Message({ isMe, msg, time }: IMessage): ReactElement {
      return (
        <div className={isMe ? 'my-message' : 'peer-message'}>
          <div>
            {msg}
            <div className="text-xs mt-1">{formatAMPM(time)}</div>
          </div>
          <img
            src={isMe ? customerFemale : customerService}
            alt={isMe ? 'me' : 'peer'}
            className={isMe ? 'my-message-image' : 'peer-message-image'}
          />
        </div>
      );
    }

    return (
      <div className="py-2 text-xl overflow-y-auto flex flex-col">
        <Message isMe={true} msg="مرحباً" time={new Date()} />
        <Message isMe={false} msg="مرحباً" time={new Date()} />
      </div>
    );
  }

  function ChatFooter(): ReactElement {
    return (
      <div className="border-t border-primary border-solid flex items-center pt-2">
        <img
          src={sendIcon}
          alt="send"
          className="w-6 cursor-pointer rounded mr-2"
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
          />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute bottom-8 left-8 grid grid-rows-chat-layout bg-white w-96 rounded-3xl border-solid border-primary border-2 py-3 px-4">
      <ChatHeader />
      <ChatMessages />
      <ChatFooter />
    </div>
  );
};
export default Chat;
