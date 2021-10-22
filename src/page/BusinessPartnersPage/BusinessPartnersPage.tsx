import { ReactElement } from 'react';
import BusinessPartnersImage from '../../assets/Img/business-partners.svg';
import { ReactComponent as Logo } from '../../assets/Img/logo.svg';
import './BusinessPartnersPage.scss';

const BusinessPartnersPage = (): ReactElement => {
  return (
    <div className="business-partners-page">
      <img
        src={BusinessPartnersImage}
        alt="BusinessPartners"
        className="w-2/3 p-8 hidden md:block"
      />
      <div className="business-partners-cards-container p-8">
        <div className="business-partners-card w-56 h-64">
          <div className="business-partners-image-container">
            <Logo className="business-partners-image" />
          </div>
          <span className="pt-4 text-lg">فواصل المستقبل</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessPartnersPage;
