import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LeftArrow } from '../../assets/Icons/left-arrow.svg';
import './NotFoundPage.scss';

const NotFoundPage = (): ReactElement => {
  return (
    <div className="Not-found-page">
      <div className="container-error-404">
        <h1 className="h1-error-404">4</h1>
        <div className="circle">
          <div className="cir2" />
        </div>
        <h1 className="h1-error-404 h">4</h1>
      </div>
      <Link to="/">
        <p className="not-found-button">
          <LeftArrow className="left-arrow" />
          رجوع للصفحة الرئيسية
        </p>
      </Link>
    </div>
  );
};

export default NotFoundPage;
