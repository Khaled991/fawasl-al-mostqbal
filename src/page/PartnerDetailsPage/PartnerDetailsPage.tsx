import { ReactElement } from "react";
// import { ReactComponent as Logo } from '../../assets/Img/logo.svg';
import Mobile from "../../assets/Icons/mobile.svg";
import Phone from "../../assets/Icons/phone.svg";
import Location from "../../assets/Icons/location.svg";
import CommercialRecord from "../../assets/Icons/commercial-record.svg";
import Email from "../../assets/Icons/email.svg";
import "./PartnerDetailsPage.scss";
import { motion } from "framer-motion";
import { getRestPartnerData } from "../PartnersPage/PartnersData";
import LogoSvg from "../../assets/Img/logo.svg";

const PartnerDetailsPage = ({ location: { state } }: any): ReactElement => {
  const details = {
    ...getRestPartnerData(state.i),
    logo: state.logo,
    name: state.name,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function RenderDetailsData(): ReactElement {
    return (
      <motion.div
        transition={{ duration: 1.2 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="details-container"
      >
        <motion.a
          href={`tele:${details.mobile}`}
          className="details-text flex items-center text-lg"
        >
          <img src={Mobile} alt="mobile" className="details-icon" />
          {details.mobile}
        </motion.a>
        <motion.a
          href={`tele:${details.phoneNumber}`}
          className="details-text flex items-center text-lg"
        >
          <img src={Phone} alt="phone" className="details-icon" />
          {details.phoneNumber}
        </motion.a>
        <motion.a
          href={`mailto:${details.email}`}
          className="details-text flex items-center text-lg"
        >
          <img src={Email} alt="email" className="details-icon" />
          {details.email}
        </motion.a>
        <motion.div className="details-text flex items-center text-lg">
          <img
            src={CommercialRecord}
            alt="CommercialRecord"
            className="details-icon"
          />
          {details.CommercialRecord}
        </motion.div>
        <motion.div className="details-text flex items-center text-lg">
          <img src={Location} alt="Location" className="details-icon" />
          {details.address}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="grid gap-4 h-screen grid-partner-details-page">
      <div className="title-grid">
        <Name name={details.name} />
      </div>
      <div className="info-grid">info</div>
      <div className="logo-grid">
        <Logo />
      </div>
      <div className="map-grid">
        <Map />
      </div>
    </div>
  );

  // return (
  //   <div className="partner-details-page flex flex-col-reverse lg:flex-col">
  //     {/* <div className="name-bar mt-5 lg:mt-16 flex justify-center md:justify-start items-center">
  //       <motion.span
  //         transition={{ duration: 1.2 }}
  //         initial={{ y: -300 }}
  //         animate={{ y: 0 }}
  //         className="text-2xl md:text-4xl mr-0 md:mr-8"
  //       >
  //         {details.name}
  //       </motion.span>
  //     </div> */}

  //     <div className="details-and-logo-container p-5 md:p-9  lg:left-16 top-2/3 lg:top-52">
  //       <motion.div
  //         transition={{ duration: 1.2 }}
  //         initial={{ scale: 0 }}
  //         animate={{ scale: 1 }}
  //         className="logo-container w-4/6 md:w-7/12 p-12 md:p-12"
  //       >
  //         <img
  //           src={details.logo}
  //           className="partner-details-logo w-20"
  //           alt={`${state.name} logo`}
  //         />
  //       </motion.div>

  //       <RenderDetailsData />
  //     </div>
  //     <div className="google-map-container w-11/12 lg:w-2/5 xl:w-2/4  h-1/3 self-center lg:self-end 2xl:w-3/5  lg:h-2/3  lg:mr-12 xl:mr-24  mt-16 lg:mt-8">
  //       <iframe
  //         title="Partners locations"
  //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59982.395917305126!2d41.495147351755044!3d20.012722007789492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ef459576d00615%3A0x502c5b028b9e526d!2z2KfZhNio2KfYrdipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1631402197667!5m2!1sar!2seg"
  //         className="google-map"
  //         loading="lazy"
  //       />
  //     </div>
  //   </div>
  // );
};

const Name = ({ name }: any) => (
  <div className="name-bar mt-5 lg:mt-16 flex justify-center md:justify-start items-center">
    <motion.span
      transition={{ duration: 1.2 }}
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      className="text-2xl md:text-4xl mr-0 md:mr-8"
    >
      {name}
    </motion.span>
  </div>
);

const Logo = () => (
  <motion.div
    transition={{ duration: 1.2 }}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="logo-container w-4/6 md:w-7/12 p-12 md:p-12 grid place-content-center"
  >
    <img
      src={LogoSvg}
      className="partner-details-logo w-20"
      alt={`${"state.name"} logo`}
    />
  </motion.div>
);

const Map = () => (
  <iframe
    title="Partners locations"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59982.395917305126!2d41.495147351755044!3d20.012722007789492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ef459576d00615%3A0x502c5b028b9e526d!2z2KfZhNio2KfYrdipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1631402197667!5m2!1sar!2seg"
    className="google-map w-full h-full"
    loading="lazy"
  />
);

export default PartnerDetailsPage;
