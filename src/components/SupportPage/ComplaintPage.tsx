import { ReactElement } from 'react';
import complaint from '../../assets/Img/complaintImage.svg';
import Button from '../Button/Button';
import LayoutPage from './../../page/LayoutPage/LayoutPage';
import circle from '../../assets/Img/circle.svg';

function ComplaintPage(): ReactElement {
  return (
    <LayoutPage imgUrl={complaint} imageStyle="w-9/12" contentCenter hideImage>
      <img
        src={circle}
        alt="circleDark"
        className="w-80 sm:w-96 h-80 sm:h-96 absolute animate-spin dura"
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
          <input placeholder="الاسم" className="custom-input" />
          <input
            placeholder="البريد الإلكتروني"
            className="custom-input"
            type="email"
          />
          <textarea
            className="custom-input"
            cols={30}
            rows={13}
            placeholder="تفاصيل الشكوى"
          ></textarea>
          <Button buttonStyleType="solidGreen w-44">إرسال</Button>
        </div>
      </div>
    </LayoutPage>
  );
}
export default ComplaintPage;
