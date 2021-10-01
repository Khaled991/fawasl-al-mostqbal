import { ReactElement } from 'react';
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
      <p>الصفحة غير موجودة</p>
    </div>
  );
};

export default NotFoundPage;
