import { ReactElement } from 'react';
import ProgramImage2 from '../../../assets/Img/programImage2.webp';
import circleDark from '../../../assets/Img/circleDark.svg';
import '../DownloadPage.scss';

const DownloadProgramDetailsPage2 = (): ReactElement => {
  return (
    <div className="download-page justify-center">
      <div className="show-image-and-description-about-program flex flex-col-reverse lg:flex-row h-auto lg:h-full  mt-14 md:mt-8 ">
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
          bottom: '-13rem',
          left: '-12rem',
        }}
      />
    </div>
  );
};

export default DownloadProgramDetailsPage2;
