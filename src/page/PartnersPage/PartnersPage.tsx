import { ReactElement } from "react";
import "./PartnersPage.scss";
import PartnersPageImage from "../../assets/Img/partnersPageImage.svg";
import { getNameAndLogoPartners } from "./PartnersData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PartnersPage = ({ match: { url } }: any): ReactElement => {
  return (
    <div className="partners-page grid-cols-1: lg:grid-cols-2">
      <div className="partners-image-container w-full">
        <img
          src={PartnersPageImage}
          alt="PartnersPageImage"
          className="partners-image hidden lg:block"
        />
      </div>
      <div className="partners-container w-full">
        <motion.div
          transition={{ duration: 1.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="partners grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 py-3 justify-items-center text-center"
        >
          {getNameAndLogoPartners().map(function ({ logo, name }, i) {
            return (
              <Link
                key={i}
                to={`${url}${i}`}
                // to={{
                //   pathname: `${url}/${i}`,
                //   state: { ...{ logo, name }, i },
                // }}
                className="partner"
              >
                <img src={logo} alt={`${name} logo`} className="partner-logo" />
                {/* <Logo className="partner-logo" /> */}
                <motion.span
                  transition={{ duration: 1 }}
                  initial={{ x: 1000, scale: 0 }}
                  animate={{ x: 0, scale: 1 }}
                  className="partner-name mt-3"
                >
                  {name}
                </motion.span>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
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
