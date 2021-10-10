import { ReactElement, useState } from 'react';
import { ReactComponent as ChatIcon } from '../../assets/Icons/chat.svg';
import chat from '../../assets/Img/chatImage.svg';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';
import { IRootReducer } from '../../redux/redux.models';
import ChatHeader from '../Chat/chat-header';
import ChatBody from '../Chat/chat-body';
import ChatFooter from '../Chat/chat-footer';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { Dispatch } from 'redux';
import { setAuthUuidAction } from '../../redux/uuid/auth.actions';
import Button from '../Button/Button';

// interface IContactUsPageProps {}

function ContactUsPage(): ReactElement {
  // {}: IContactUsPageProps
  const [showChat, setShowChat] = useState<boolean>(false);
  const dispatch: Dispatch = useDispatch();

  function onClickOpenChat() {
    signInAnonymously(auth)
      .then(async () => {
        setShowChat(true);
        dispatch(setAuthUuidAction(auth.currentUser?.uid ?? ''));
      })
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div className="w-full h-screen grid grid-cols-2 grid-rows-4 gap-10 pr-0 xl:pr-32 relative pt-8">
      <div
        className="
          col-span-2
          row-span-3
          md:row-span-2
          xl:row-span-4
          xl:col-span-1
          place-self-center
        "
      >
        <div className="flex flex-col items-center md:px-20">
          <div className="font-bold mb-4 text-center leading-snug text-4xl xl:text-4-5xl xl:leading-normal">
            <div className="w-full">
              يمكنك التحدث مع أحد ممثلي{' '}
              <span className="text-primary">خدمة العملاء</span> إن لم تجد حل
              لمشكلتك <div>نحن نعمل على الدوام</div>{' '}
              <span className="text-primary">٢٤</span> ساعة
            </div>
          </div>
          <Button
            buttonStyleType="solidGreen custom-button flex justify-center px-20 w-3/4 items-center"
            onClick={onClickOpenChat}
          >
            فتح محادثة
            <ChatIcon className="chat-icon h-6 ml-3" />
          </Button>
        </div>
      </div>

      <img
        className="
          max-h-full
          row-span-1
          col-span-2
          place-self-center
          md:row-span-2
          xl:h-auto
          xl:col-span-1
          xl:row-span-4
          xl:place-self-end
        "
        src={chat}
        alt="chat"
      />
      {showChat ? <Chat hideChat={() => setShowChat(false)} /> : ''}
    </div>
  );
}

function Chat({ hideChat }: any): ReactElement {
  return (
    <div className="absolute bottom-8 left-8 grid grid-rows-chat-layout bg-white w-96 rounded-3xl border-solid border-primary border-2 py-3 px-4">
      <ChatHeader hideChat={hideChat} />
      <ChatBody />
      <ChatFooter />
    </div>
  );
}

const mapStateToProps = createStructuredSelector<IRootReducer, any>({});

export default connect(mapStateToProps)(ContactUsPage);
