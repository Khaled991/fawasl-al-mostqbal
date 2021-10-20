import { ReactElement } from 'react';
import Services1 from '../../assets/Img/services1.svg';
import EmojiSmile from '../../assets/Icons/emojiSmile.svg';
import '../../page/ServicesPage/ServicesPage.scss';

const ServicesHome = (): ReactElement => {
  return (
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
  );
};

export default ServicesHome;
