import ProgramImage from '../../../assets/Img/programImage.webp';
import { ReactElement } from 'react';
import '../DownloadPage.scss';
import { motion } from 'framer-motion';

const DownloadProgramDetailsPage = (): ReactElement => {
  return (
    <div className="download-page">
      <motion.div
        transition={{ duration: 1 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="title-download-page-container mt-0 md:mt-8 mb-24 md:mb-0 text-xl sm:text-2xl md:text-4xl"
      >
        <span className="title-dark-color">
          افضل نظام متكامل لإدارة
          <motion.div
            transition={{ duration: 1 }}
            initial={{ x: 190 }}
            animate={{ x: 1 }}
            className="dark-border-bottom"
          />
        </span>
        <span className="title-green-color ">
          اعمالك
          <motion.div
            transition={{ duration: 1 }}
            initial={{ x: -190 }}
            animate={{ x: 1 }}
            className="green-border-bottom"
          />
        </span>
      </motion.div>

      <div className="show-image-and-description-about-program flex flex-col mt-8 lg:mt-0 lg:flex-row h-full justify-center">
        <motion.div
          transition={{ duration: 1 }}
          initial={{ scale: 0, x: 520 }}
          animate={{ scale: 1, x: 0 }}
          className="program-description-and-title-container w-full lg:w-1/2 text-center items-center lg:items-start  justify-start lg:justify-center pr-0"
        >
          <span className="program-description-title text-4xl">
            إنشاء فواتير
          </span>
          <span className="program-description  text-3xl">
            سرعة و سهولة إنشاء الفواتير وطباعتها.
          </span>
        </motion.div>
        <motion.div
          transition={{ duration: 1 }}
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          className="program-page-container mt-6 lg:mt-0 items-start lg:items-center w-full lg:w-1/2"
        >
          <img
            src={ProgramImage}
            alt="programImage"
            className="program-image lg:w-11/12"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadProgramDetailsPage;
