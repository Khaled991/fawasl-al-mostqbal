import { ReactElement } from "react";
import ProgramImage from "../../assets/Img/programImage.webp";
import ProgramImage2 from "../../assets/Img/programImage2.webp";
import programImage3 from "../../assets/Img/programImage3.webp";
import circleDark from "../../assets/Img/circleDark.svg";
import HeaderDownloadCenterSide from "../../assets/Img/header-download-center-side.webp";
import HeaderDownloadLeftSide from "../../assets/Img/header-download-left-side.webp";
import HeaderDownloadRightSide from "../../assets/Img/header-download-right-side.webp";
import { motion } from "framer-motion";
import "./DownloadPage.scss";

export const ProgramAndDownloadPages = (): ReactElement => {
  return (
    <div className="download-page ">
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

      <div className="show-image-and-description-about-program flex flex-col mt-8 lg:mt-0 lg:flex-row h-full justify-center md:pr-36">
        <div className="program-description-and-title-container w-full lg:w-1/2 items-center lg:items-start  justify-start lg:justify-center pr-0">
          <span className="program-description-title text-4xl">
            إنشاء فواتير
          </span>
          <span className="program-description  text-3xl">
            سرعة و سهولة إنشاء الفواتير وطباعتها.
          </span>
        </div>
        <div className="program-page-container mt-6 lg:mt-0 items-start lg:items-center w-full lg:w-1/2">
          <img
            src={ProgramImage}
            alt="programImage"
            className="program-image lg:w-11/12"
          />
        </div>
      </div>
    </div>
  );
};

export const ProgramAndDownloadPages2 = (): ReactElement => {
  return (
    <div className="download-page justify-center">
      <div className="show-image-and-description-about-program flex flex-col-reverse lg:flex-row h-auto lg:h-full  mt-14 md:mt-8 md:pr-36">
        <div className="program-page-container  items-start lg:items-center w-full lg:w-1/2 mr-0 lg:mr-20">
          <img
            src={ProgramImage2}
            alt="programImage"
            className="program-image"
          />
        </div>
        <div className="program-description-and-title-container w-full lg:w-1/2 items-center  justify-start lg:justify-center pr-0 lg:pr-20 p-6 lg:p-0">
          <span className="program-description-title text-4xl">صفحة Admin</span>
          <span className="program-description text-3xl lg:w-3/5 text-center	">
            يحتوي على اقوى صفحات admin لادارة مشروعك بكل سهولة.
          </span>
        </div>
      </div>
      <img
        src={circleDark}
        alt="circleDark"
        className="w-80 sm:w-96 h-80 sm:h-96 absolute animate-spin dura"
        style={{
          bottom: "-12rem",
          left: "-12rem",
        }}
      />
    </div>
  );
};
export const ProgramAndDownloadPages3 = (): ReactElement => {
  return (
    <div className="download-page ">
      <div className="show-image-and-description-about-program md:pr-36 flex flex-col mt-8 lg:mt-0 lg:flex-row h-full justify-center">
        <div className="program-description-and-title-container w-full lg:w-1/2 items-center lg:items-start  justify-start lg:justify-center pr-0 lg:pr-20">
          <span className="program-description-title text-4xl">
            السرعة في استخراج التقارير
          </span>
          <span className="program-description text-3xl w-9/12 text-center lg:text-right">
            يتيح لك عمل التقارير بسرعة و سير العمل في شركتك بكل سهولة.
          </span>
        </div>
        <div className="program-page-container mt-6 lg:mt-0 items-start lg:items-center w-full lg:w-1/2">
          <img
            src={programImage3}
            alt="programImage"
            className="program-image"
          />
        </div>
      </div>
    </div>
  );
};
export const DownloadCardsPages = (): ReactElement => {
  return (
    <div className="download-page items-start md:pr-36">
      {/* <div className="dowmload-page-header justify-center xl:justify-between">
        <motion.img
          src={HeaderDownloadRightSide}
          alt="HeaderDownloadRightSide"
          transition={{ duration: 1.3 }}
          initial={{ x: 550, scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          className="hidden xl:block "
        />
        <div>
          <motion.img
            src={HeaderDownloadCenterSide}
            alt="HeaderDownloadCenterSide"
            className="header-download-center-side-bottom relative bottom-0 left-0 xl:-bottom-32 xl:-left-16"
            transition={{ duration: 1.3 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
          <motion.img
            src={HeaderDownloadCenterSide}
            alt="HeaderDownloadCenterSide"
            className="header-download-center-side-top absolute "
            transition={{ duration: 1.3 }}
            initial={{ y: -200, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
          />
        </div>
        <motion.img
          transition={{ duration: 1.3 }}
          initial={{ x: -550, scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          src={HeaderDownloadLeftSide}
          alt="HeaderDownloadLeftSide"
          className="hidden xl:block "
        />
      </div> */}
      <div className="pricing-table">
        <div className="pricing-card ">
          <h3 className="pricing-card-header">نسخة كاملة</h3>
          <div className="price">
            <sup>SAR</sup>01<span>/ شهرياٌ</span>
          </div>
          <ul>
            <li>
              <strong>true</strong>تحتوي على مزاية اكتر
            </li>
            <li>
              <strong>true</strong>تحتوي على تحكم اكبر
            </li>
            <li>
              <strong>true</strong>سرعة البرنامج
            </li>
            <li>
              <strong>true</strong>إنشاء الفواتير و طباعتها
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
            <li>
              <strong>false</strong>تحتوي على مزاية اكتر
            </li>
            <li>
              <strong>false</strong>تحتوي على تحكم اكبر
            </li>
            <li>
              <strong>true</strong>سرعة البرنامج
            </li>
            <li>
              <strong>true</strong>إنشاء الفواتير و طباعتها
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
