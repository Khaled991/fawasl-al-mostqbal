import { ReactElement } from 'react';
import { partnersData } from '../PartnersPage/PartnersData';
import './PartnerDetailsPage.scss';
import ReactPageScroller from 'react-page-scroller';

const PartnerDetailsPage = ({
  location: { state },
  match: {
    params: { id },
  },
}: any): ReactElement => {
  // useEffect(() => {
  //   const innerHeight = window.innerHeight;

  //   scrollTo(innerHeight * Number(id));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const scrollTo = (position: number) => {
  //   window.scrollTo(0, position);
  // };

  const RenderPartnerDetailPage = ({ details }: any) => {
    return (
      <div>
        <div className="partner-details__container z-1">
          <div className="partner-details__title">
            <img
              src={details.logo}
              alt="logo"
              className="partner-details__logo"
            />
            <div className="partner-details__name">{details.name}</div>
          </div>
          <div className="details-coulmn w-full">
            <div className="row-partner-details flex justify-evenly w-full flex-col md:flex-row">
              <div className="partner-details__data">
                <div className="partner-details__data--title">الجوال</div>
                <div className="partner-details__data--data">
                  {details.mobile}
                </div>
              </div>
              <div className="partner-details__data">
                <div className="partner-details__data--title">أرضي</div>
                <div className="partner-details__data--data">
                  {details.phoneNumber}
                </div>
              </div>
              <div className="partner-details__data">
                <div className="partner-details__data--title">سجل تجاري</div>
                <div className="partner-details__data--data">
                  {details.CommercialRecord}
                </div>
              </div>
            </div>
            <div className="partner-details__data flex-1 md:flex-none">
              <div className="partner-details__data--title">
                البريد الالكتروني
              </div>
              <div className="partner-details__data--data">{details.email}</div>
            </div>
            <div className="partner-details__data flex-1 md:flex-none">
              <div className="partner-details__data--title">العنوان</div>
              <div className="partner-details__data--data">
                {details.address}
              </div>
            </div>
          </div>
          <Map className="w-full h-1/5" />
        </div>
        <Map isNotMobile />
      </div>
    );
  };

  return (
    <ReactPageScroller containerHeight="100%" customPageNumber={Number(id)}>
      {/* <> */}
      {partnersData.map((details, i) => (
        <RenderPartnerDetailPage key={i} details={details} />
      ))}
      {/* </> */}
    </ReactPageScroller>
  );
};

export default PartnerDetailsPage;

// import { ReactElement } from 'react';
// // import { ReactComponent as Logo } from '../../assets/Img/logo.svg';
// import Mobile from '../../assets/Icons/mobile.svg';
// import Phone from '../../assets/Icons/phone.svg';
// import Location from '../../assets/Icons/location.svg';
// import CommercialRecord from '../../assets/Icons/commercial-record.svg';
// import Email from '../../assets/Icons/email.svg';
// import './PartnerDetailsPage.scss';
// import { motion } from 'framer-motion';
// import LogoSvg from '../../assets/Img/logo.svg';
// import { partnersData, IPartnersData } from './../PartnersPage/PartnersData';

// const PartnerDetailsPage = ({
//   location: { state },
//   match: {
//     params: { id },
//   },
// }: any): ReactElement => {
//   const details = partnersData[id];
//   // {
//   //   ...getRestPartnerData(id),
//   //   logo: state.logo,
//   //   name: state.name,
//   // };

//   function RenderDetailsData(): ReactElement {
//     return (
//       <motion.div
//         transition={{ duration: 1.2 }}
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         className="details-container"
//       >
//         <motion.a
//           href={`tele:${details.mobile}`}
//           className="details-container flex items-center text-lg"
//         >
//           <img src={Mobile} alt="mobile" className="details-icon" />
//           <div className="details-text">{details.mobile}</div>
//         </motion.a>
//         <motion.a
//           href={`tele:${details.phoneNumber}`}
//           className="details-container flex items-center text-lg"
//         >
//           <img src={Phone} alt="phone" className="details-icon" />
//           <div className="details-text">{details.phoneNumber}</div>
//         </motion.a>
//         <motion.a
//           href={`mailto:${details.email}`}
//           className="details-container flex items-center text-lg"
//         >
//           <img src={Email} alt="email" className="details-icon" />
//           <div className="details-text">{details.email}</div>
//         </motion.a>
//         <motion.div className="details-container flex items-center text-lg">
//           <img
//             src={CommercialRecord}
//             alt="CommercialRecord"
//             className="details-icon"
//           />
//           <div className="details-text">{details.CommercialRecord}</div>
//         </motion.div>
//         <motion.div className="details-container flex items-center text-lg">
//           <img src={Location} alt="Location" className="details-icon" />
//           <div>{details.address}</div>
//         </motion.div>
//       </motion.div>
//     );
//   }

//   return (
//     <div className="grid gap-4 h-screen grid-partner-details-page">
//       <div className="title-grid">
//         <Name name={details.name} />
//       </div>
//       <div className="logo-grid">
//         <Logo />
//       </div>
//       <div className="info-grid md:mt-10">
//         <RenderDetailsData />
//       </div>
//       <div className="map-grid">
//         <Map />
//       </div>
//     </div>
//   );
// };

// const Name = ({ name }: any) => (
//   <div className="name-bar my-5 lg:my-16 flex justify-center md:justify-start items-center">
//     <motion.span
//       transition={{ duration: 1.2 }}
//       initial={{ y: -300 }}
//       animate={{ y: 0 }}
//       className="text-2xl md:text-4xl mr-0 md:mr-8"
//     >
//       {name}
//     </motion.span>
//   </div>
// );

// const Logo = () => (
//   <motion.div
//     transition={{ duration: 1.2 }}
//     initial={{ scale: 0 }}
//     animate={{ scale: 1 }}
//     className="logo-container w-4/6 md:w-7/12 grid place-content-center"
//   >
//     <img
//       src={LogoSvg}
//       className="partner-details-logo w-20"
//       alt={`${'state.name'} logo`}
//     />
//   </motion.div>
// );

const Map = ({ isNotMobile, className, ...props }: any) => (
  <iframe
    title="Partners locations"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59982.395917305126!2d41.495147351755044!3d20.012722007789492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ef459576d00615%3A0x502c5b028b9e526d!2z2KfZhNio2KfYrdipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1631402197667!5m2!1sar!2seg"
    className={`${
      isNotMobile
        ? 'md:w-1/4 md:h-screen z-[1] hidden md:block'
        : 'md:hidden block'
    } ${className}`}
    loading="lazy"
    {...props}
  />
);

// export default PartnerDetailsPage;
