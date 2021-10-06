import True from '../../../assets/Icons/true.svg';
import False from '../../../assets/Icons/false.svg';
import { ReactElement } from 'react';
import '../DownloadPage.scss';

const DownloadCardsPage = (): ReactElement => {
  return (
    <div className="download-page items-start ">
      <div className="pricing-table">
        <div className="pricing-card ">
          <h3 className="pricing-card-header">نسخة كاملة</h3>
          <div className="price">
            <sup>SAR</sup>01<span>/ شهرياً</span>
          </div>
          <ul>
            <li className="flex flex-row items-center justify-center">
              <strong>
                <img src={True} alt="صواب" width="20" className="mr-2" />
              </strong>
              تحتوي على مزاية اكتر
            </li>
            <li className="flex flex-row items-center justify-center">
              <strong>
                <img src={True} alt="صواب" width="20" className="mr-2" />
              </strong>
              تحتوي على تحكم اكبر
            </li>
            <li className="flex flex-row items-center justify-center">
              <strong>
                <img src={True} alt="صواب" width="20" className="mr-2" />
              </strong>
              سرعة البرنامج
            </li>
            <li className="flex flex-row items-center justify-center">
              <strong>
                <img src={True} alt="صواب" width="20" className="mr-2" />
              </strong>
              إنشاء الفواتير و طباعتها
            </li>
          </ul>
          <a href="=" className="order-btn">
            تحميل
          </a>
        </div>
        <div className="pricing-card">
          <h3 className="pricing-card-header">نسخة مجانية</h3>
          <div className="price">
            <sup>SAR</sup>0<span> يومان</span>
          </div>
          <ul>
            <li className="flex flex-row items-center justify-center">
              <strong>
                <img src={False} alt="خطأ" width="15" className="mr-2" />
              </strong>
              تحتوي على مزاية اكتر
            </li>
            <li className="flex flex-row items-center justify-center">
              <strong>
                <img src={False} alt="خطأ" width="15" className="mr-2" />
              </strong>
              تحتوي على تحكم اكبر
            </li>
            <li className="flex flex-row items-center justify-center">
              <strong>
                <img src={True} alt="صواب" width="20" className="mr-2" />
              </strong>
              سرعة البرنامج
            </li>
            <li className="flex flex-row items-center justify-center">
              <strong>
                <img src={True} alt="صواب" width="20" className="mr-2" />
              </strong>
              إنشاء الفواتير و طباعتها
            </li>
          </ul>
          <a href="=" className="order-btn">
            تحميل
          </a>
        </div>
      </div>
      <div className="title-download-page-container mt-14 md:mt-8 text-xl sm:text-2xl md:text-4xl pb-7">
        <span className="title-dark-color">نظام متكامل لإدارة اعمالك</span>
        <span className="title-green-color ">في راحة يديك</span>
      </div>
    </div>
  );
};

export default DownloadCardsPage;
