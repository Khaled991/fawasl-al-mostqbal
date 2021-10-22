import { ReactElement } from 'react';
import './LayoutPage.scss';

interface ILayoutPage {
  imgUrl: string;
  children?: any;
  contentCenter?: boolean;
  reverse?: boolean;
  containerStyle?: string;
  contentStyle?: string;
  imageStyle?: string;
  hideImage?: boolean;
}

const LayoutPage = ({
  imgUrl,
  contentCenter,
  children,
  reverse,
  containerStyle,
  contentStyle,
  imageStyle,
  hideImage,
}: ILayoutPage): ReactElement => {
  return (
    <div
      className={`page-layout ${reverse ? 'reverse' : ''} ${containerStyle}`}
      dir="rtl"
    >
      <div
        className={`content justify-self-center md:justify-self-start ${
          contentCenter ? 'md:justify-self-center' : ''
        } ${contentStyle}`}
      >
        {children}
      </div>
      {/* <div className=""> */}
      <img
        className={`image ${imageStyle} ${hideImage ? 'hidden lg:block' : ''}`}
        src={imgUrl}
        alt=""
      />
      {/* </div> */}
    </div>
  );
};

export default LayoutPage;
