import { ReactElement, useState } from 'react';
import complaint from '../../assets/Img/complaintImage.svg';
import Button from '../Button/Button';
import LayoutPage from './../../page/LayoutPage/LayoutPage';
import circle from '../../assets/Img/circle.svg';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../../utils/firebase';

function ComplaintPage(): ReactElement {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  const handleName = ({ target: { value } }: any) => {
    setName(value);
  };
  const handleEmail = ({ target: { value } }: any) => {
    setEmail(value);
  };
  const handleDetails = ({ target: { value } }: any) => {
    setDetails(value);
  };

  const onPressSendcomplaint = async () => {
    if (name === '') {
      alert('يجب إضافة اسم ');
    } else if (email === '') {
      alert('يجب إضافة بريد الكتروني ');
    } else if (details === '') {
      alert('يجب ملئ تفاصيل الشكوي ');
    } else {
      // Add a new document with a generated id.
      await addDoc(collection(firestore, 'complaints'), {
        name: name,
        email: email,
        details: details,
      });
      setName('');
      setEmail('');
      setDetails('');
    }
  };

  return (
    <LayoutPage imgUrl={complaint} imageStyle="w-9/12" contentCenter hideImage>
      <img
        src={circle}
        alt="circleDark"
        className="w-80 sm:w-96 h-80 sm:h-96 absolute animate-spin dura hidden lg:block"
        style={{
          bottom: '-12rem',
          left: '-12rem',
        }}
      />
      <div
        className="flex justify-center items-center row-span-2 col-span-2 lg:col-span-1"
        dir="rtl"
      >
        <div className="w-10/12 flex flex-col">
          <div className="text-5xl font-bold mb-4">
            تقديم <span className="text-primary">شكوى</span>
          </div>
          <input
            type="text"
            name="username"
            placeholder="الاسم"
            className="custom-input"
            onChange={handleName}
            value={name}
          />
          <input
            name="email"
            placeholder="البريد الإلكتروني"
            className="custom-input"
            type="email"
            onChange={handleEmail}
            value={email}
          />
          <textarea
            className="custom-input"
            cols={30}
            rows={13}
            placeholder="تفاصيل الشكوى"
            onChange={handleDetails}
            value={details}
          />
          <Button
            buttonStyleType="solidGreen w-44"
            onClick={onPressSendcomplaint}
          >
            إرسال
          </Button>
        </div>
      </div>
    </LayoutPage>
  );
}
export default ComplaintPage;
