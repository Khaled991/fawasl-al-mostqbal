import { ReactElement } from 'react';
import './Footer.scss';

const Footer = (): ReactElement => {
  return (
    <div className="footer">
      <div className="copyright">
        <span>حقوق النشر @ 2021 فواصل المستقبل</span>
      </div>
    </div>
  );
};

export default Footer;
