import { ReactElement } from 'react';
import DownloadCardsPage from './DownloadPages/DownloadCardsPages';
import DownloadProgramDetailsPage from './DownloadPages/DownloadProgramDetailsPage';
import DownloadProgramDetailsPage2 from './DownloadPages/DownloadProgramDetailsPage2';
import DownloadProgramDetailsPage3 from './DownloadPages/DownloadProgramDetailsPage3';

const DownloadPage = (): ReactElement => {
  return (
    <div className="download-scroll-page">
      <DownloadProgramDetailsPage />
      <DownloadProgramDetailsPage2 />
      <DownloadProgramDetailsPage3 />
      <DownloadCardsPage />
    </div>
  );
};

export default DownloadPage;
