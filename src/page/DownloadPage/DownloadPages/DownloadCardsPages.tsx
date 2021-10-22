import { ReactElement } from 'react';
import DownloadCard from '../../../components/DownloadCard/DownloadCard';
import GooglePlayLink from '../../../assets/Img/google-play.webp';
import AppStore from '../../../assets/Img/app-store.webp';
import '../DownloadPage.scss';
import { motion } from 'framer-motion';

const DownloadCardsPage = (): ReactElement => {
  return (
    <div className="download-page items-start">
      <div className="pricing-table flex-col md:flex-row items-center md:items-start">
        <DownloadCard
          version={'نسخة كاملة'}
          price={'01'}
          days={'/ شهرياً'}
          isSupportFeature={[true, true, true, true]}
        />
        <DownloadCard
          version={'نسخة مجانية'}
          price={'0'}
          days={' يومان'}
          isSupportFeature={[false, false, true, true]}
        />
      </div>
      <div className="mobile-app-links">
        <a href="s#" className="mobil-app-btn">
          <img src={AppStore} alt="appStore" />
        </a>
        <a href="s#" className="mobil-app-btn">
          <img src={GooglePlayLink} alt="googlePlay" />
        </a>
      </div>
      <div className="title-download-page-container mt-14 md:mt-8 text-xl sm:text-2xl md:text-4xl pb-7">
        <motion.span
          transition={{ duration: 0.9 }}
          initial={{ scale: 0, x: 225 }}
          animate={{ scale: 1, x: 0 }}
          className="title-dark-color"
        >
          نظام متكامل لإدارة اعمالك
        </motion.span>
        <motion.span
          transition={{ duration: 0.9 }}
          initial={{ scale: 0, x: -250 }}
          animate={{ scale: 1, x: 0 }}
          className="title-green-color "
        >
          في راحة يديك
        </motion.span>
      </div>
    </div>
  );
};

export default DownloadCardsPage;
