import { ReactElement } from 'react';
import True from '../../assets/Icons/true.svg';
import False from '../../assets/Icons/false.svg';

import './DownloadCard.scss';
import Button from '../Button/Button';

interface IDownloadCardProps {
  version: string;
  price: string;
  days: string;
  isSupportFeature: boolean[];
}

const DownloadCard = ({
  version,
  price,
  days,
  isSupportFeature,
}: IDownloadCardProps): ReactElement => {
  return (
    <div className="pricing-card  w-80">
      <h3 className="pricing-card-header">{version}</h3>
      <div className="price">
        <sup>SAR</sup>
        {price}
        <span>{days}</span>
      </div>
      <ul>
        <li className="flex flex-row items-center justify-center">
          <strong>
            <img
              src={isSupportFeature[0] ? True : False}
              alt="صواب"
              width="20"
              className="mr-2"
            />
          </strong>
          تحتوي على مزاية اكتر
        </li>
        <li className="flex flex-row items-center justify-center">
          <strong>
            <img
              src={isSupportFeature[1] ? True : False}
              alt="صواب"
              width="20"
              className="mr-2"
            />
          </strong>
          تحتوي على تحكم اكبر
        </li>
        <li className="flex flex-row items-center justify-center">
          <strong>
            <img
              src={isSupportFeature[2] ? True : False}
              alt="صواب"
              width="20"
              className="mr-2"
            />
          </strong>
          سرعة البرنامج
        </li>
        <li className="flex flex-row items-center justify-center">
          <strong>
            <img
              src={isSupportFeature[3] ? True : False}
              alt="صواب"
              width="20"
              className="mr-2"
            />
          </strong>
          إنشاء الفواتير و طباعتها
        </li>
      </ul>
      <Button buttonStyleType="greenBorder order-btn">تحميل</Button>
    </div>
  );
};

export default DownloadCard;
