import { ReactElement } from 'react';
import programImage3 from '../../../assets/Img/programImage3.webp';
import '../DownloadPage.scss';

const DownloadProgramDetailsPage3 = (): ReactElement => {
  return (
    <div className="download-page ">
      <div className="show-image-and-description-about-program flex flex-col mt-8 lg:mt-0 lg:flex-row h-full justify-center">
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

export default DownloadProgramDetailsPage3;
