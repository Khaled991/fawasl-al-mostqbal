import { ReactElement } from 'react';
import RequestServices from '../../components/Services/RequestServices';
import ServicesHome from '../../components/Services/ServicesHome';
import './ServicesPage.scss';

const ServicesPage = (): ReactElement => {
  return (
    <div className="">
      <ServicesHome />
      <RequestServices />
    </div>
  );
};

export default ServicesPage;
