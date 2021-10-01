import { ReactElement, useState } from 'react';
import './ServicesPage.scss';
import Services1 from '../../assets/Img/services1.svg';
import Services2 from '../../assets/Img/services2.svg';
import EmojiSmile from '../../assets/Icons/emojiSmile.svg';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';

const ServicesPage = (): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState({});

  return (
    <>
      <div className="services-page grid grid-cols-1 xl:grid-cols-2 items-center">
        <img src={Services1} alt="طلبات خاصة" className="p-7" />
        <div className="services-description-container pr-0 lg:pr-8 pl-0 lg:pl-16 text-center lg:text-right	">
          <span className="text-3xl lg:text-4xl">
            يمكنك الان طلب <span className="text-primary">موقعك</span> او{' '}
            <span className="text-primary">برنامجك </span>
            او <span className="text-primary">APP موبيل</span> والحصول على{' '}
            <span className="text-primary">السرعة</span>و الاداء و{' '}
            <span className="text-primary">سهولة</span> الاستخدام يمكنك{' '}
            <span className="text-primary inline-flex items-center">
              {' '}
              الطلب الان{' '}
              <img
                src={EmojiSmile}
                alt="وجة مبتسم"
                width="60"
                className="pl-2 pr-2 pt-2"
              />
            </span>
          </span>
        </div>
      </div>

      <div className="services-page grid grid-cols-1 xl:grid-cols-2 items-center">
        <div className="program-details flex flex-col items-center ">
          <div className="services-description-container px-0 md:px-28 text-center mb-8">
            <span className=" text-2xl md:text-3xl lg:text-4xl">
              ارسل لنا <span className="text-primary">طلبك</span> لمساعدتك في{' '}
              <span className="text-primary">انشاء</span> او{' '}
              <span className="text-primary">تعديل</span> موقعك.
            </span>
          </div>
          <Dropdown
            unselectedText="نوع الطلب"
            options={[
              'إنشاء موقع',
              'إنشاء موبيل app',
              'إنشاء برنامج',
              'التعديل على موقع أو برنامج او موبيل app',
            ]}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <textarea
            dir="rtl"
            className="custom-input w-11/12 md:w-4/6"
            cols={50}
            style={{ resize: 'none' }}
            draggable={true}
            rows={13}
            placeholder="تفاصيل الشكوى"
          />
          <Button buttonStyleType="solidGreen flex w-11/12 md:w-4/6 justify-center">
            ارسال الطلب
          </Button>
        </div>

        <img
          src={Services2}
          alt="2 طلبات خاصة"
          className="p-9 hidden xl:block"
        />
      </div>
    </>
  );
};

export default ServicesPage;
