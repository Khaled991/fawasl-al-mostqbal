import { ReactElement } from 'react';
import './DownloadPage.scss';
import ProgramImage from '../../assets/Img/programImage.webp';

const DownloadPage = (): ReactElement => {
  return (
    <div className="download-page">
      <div className="title-download-page-container mt-14 md:mt-8 text-xl sm:text-2xl md:text-4xl">
        <span className="title-dark-color">
          افضل نظام متكامل لإدارة
          <div className="dark-border-bottom" />
        </span>
        <span className="title-green-color ">
          اعمالك
          <div className="green-border-bottom" />
        </span>
      </div>

      <div className="show-image-and-description-about-program flex flex-col-reverse lg:flex-row h-auto lg:h-full">
        <div className="program-description-and-title-container w-full lg:w-1/2 items-center lg:items-start  justify-start lg:justify-center pr-0 lg:pr-20">
          <span className="program-description-title text-4xl">
            إنشاء فواتير
          </span>
          <span className="program-description text-3xl">
            سرعة و سهولة إنشاء الفواتير وطباعتها.
          </span>
        </div>
        <div className="program-page-container  items-start lg:items-center w-full lg:w-1/2">
          <img
            src={ProgramImage}
            alt="programImage"
            className="program-image"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
