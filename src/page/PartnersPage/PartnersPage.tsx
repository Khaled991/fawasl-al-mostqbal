import { ReactElement } from 'react';
import './PartnersPage.scss';
import PartnersPageImage from '../../assets/Img/partnersPageImage.svg';
import { getNameAndLogoPartners } from './PartnersData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageContainer from './../../components/PageContainer/PageContainer';

const PartnersPage = ({ match: { url } }: any): ReactElement => {
  return (
    <PageContainer title="الموزعين">
      <div className="partners-page grid-cols-1: lg:grid-cols-2">
        <div className="partners-container w-full">
          <motion.div className="partners grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 py-3 justify-items-center text-center">
            {getNameAndLogoPartners().map(function ({ logo, name }, i) {
              return (
                <motion.div
                  transition={{ duration: 0.5 }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="partner"
                >
                  <Link key={i} to={`${url}/${i}`}>
                    <img
                      src={logo}
                      alt={`${name} logo`}
                      className="partner-logo"
                    />
                    <span className="partner-name mt-3">{name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div className="partners-image-container w-full">
          <img
            src={PartnersPageImage}
            alt="PartnersPageImage"
            className="partners-image hidden lg:block"
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default PartnersPage;

// to={{
//   pathname: '/partnerDetails',
//   state: {
//     Name: name,
//     Logo: Logo,
//   },
// }}
