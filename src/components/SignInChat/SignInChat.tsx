import { ReactElement, useState } from 'react';
import '../Chat/Chat.scss';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../../utils/firebase';
import { ReactComponent as XIcon } from '../../assets/Icons/x.svg';
import { toggleChatAction } from '../../redux/chat/chat.actions';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';

const SignInChat = ({ setIsUserName }: any): ReactElement => {
  const [userName, setUserName] = useState('');

  const onChangeUserName = ({ target: { value } }: any) => {
    setUserName(value);
  };

  const onClickSingInUser = async () => {
    if (!userName) return alert('يجب ادخال اسم مستخدم');
    await addDoc(collection(firestore, 'chatUsers'), {
      userName: userName,
    });
    setIsUserName(false);
  };
  const dispatch = useDispatch();
  return (
    <div className="sign-in-chat fixed bottom-8 left-8 w-96 rounded-3xl py-3 px-4">
      <div onClick={() => dispatch(toggleChatAction())}>
        <XIcon className="close-sign-in-chat-icon" />
      </div>
      <div className="sign-in-chat-content">
        <span className="chat-sign-in-title text-center text-xl pb-8">
          يجب ادخال <span className="text-primary">اسم المستخدم</span> لسهولة
          التواصل مع <span className="text-primary">خدمة العملاء</span>
        </span>
        <input
          className="chat-name-input"
          placeholder="اسم المستخدم"
          type="text"
          name="username"
          onChange={onChangeUserName}
          value={userName}
        />
        <Button
          onClick={onClickSingInUser}
          buttonStyleType="solidGreen w-full p-3 "
        >
          بدأ المحادثة
        </Button>
      </div>
    </div>
  );
};

export default SignInChat;
