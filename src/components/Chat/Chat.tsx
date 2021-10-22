import { forwardRef, ReactElement, useState } from "react";
import SignInChat from "../SignInChat/SignInChat";
import ChatBody from "./chat-body0";
import ChatFooter from "./ChatFooter/chat-footer";
import ChatHeader from "./ChatHeader/chat-header";
import "./Chat.scss";

const Chat = forwardRef((props, messagesContainerRef): ReactElement => {
  const [isUserName, setIsUserName] = useState(true);

  return isUserName ? (
    <SignInChat setIsUserName={setIsUserName} />
  ) : (
    <div className="chat">
      <ChatHeader />
      <ChatBody ref={messagesContainerRef} />
      <ChatFooter />
    </div>
  );
});
export default Chat;
