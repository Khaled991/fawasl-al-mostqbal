import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import callIcon from '../../../assets/Icons/call.svg';
import { ReactComponent as XIcon } from '../../../assets/Icons/x.svg';
import { toggleChatAction } from '../../../redux/chat/chat.actions';
import './ChatHeader.scss';
import { motion } from 'framer-motion';

function ChatHeader(): ReactElement {
  const dispatch = useDispatch();

  return (
    <div className="border-b border-primary border-solid flex justify-between items-center pb-2 cursor-pointer">
      <div onClick={() => dispatch(toggleChatAction())}>
        <XIcon className="close-chat-button-icon" />
      </div>
      <motion.div
        transition={{ duration: 1 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-xl font-bold"
      >
        المحادثة
      </motion.div>
      <img src={callIcon} alt="call" className="call-icon-style" />
    </div>
  );
}

export default ChatHeader;
