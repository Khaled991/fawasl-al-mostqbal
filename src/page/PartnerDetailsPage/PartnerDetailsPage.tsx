import { ReactElement } from "react";
import { ReactComponent as Logo } from "../../assets/Img/logo.svg";
import { ReactComponent as Mobile } from "../../assets/Icons/mobile.svg";
import { ReactComponent as Phone } from "../../assets/Icons/phone.svg";
import { ReactComponent as Location } from "../../assets/Icons/location.svg";
import { ReactComponent as CommercialRecord } from "../../assets/Icons/commercial-record.svg";
import { ReactComponent as Email } from "../../assets/Icons/email.svg";
import "./PartnerDetailsPage.scss";
import { motion } from "framer-motion";

const PartnerDetailsPage = (): ReactElement => {
  const derailsData = [
    {
      text: "+٩٦٦٥٩٣٧٢٩١٨١٩",
      Icon: Mobile,
      href: "-",
    },
    {
      text: "٠٢٥٩٣٧٢٩١٨١٩",
      Icon: Phone,
      href: "-",
    },
    {
      text: "fawaslalmostaqbl@gmail.com",
      Icon: Email,
      href: "-",
    },
    {
      text: "٧٨٩-٤٥٦-١٢٣",
      Icon: CommercialRecord,
      href: "-",
    },
    {
      text: "٦ ش صبر السمان متفرع من اللاشين",
      Icon: Location,
      href: "-",
    },
  ];
  return (
    <div className="partner-details-page flex flex-col-reverse lg:flex-col">
      <div className="name-bar mt-5 lg:mt-16 flex justify-center md:justify-start items-center">
        <motion.span
          transition={{ duration: 1.2 }}
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          className="text-2xl md:text-4xl mr-0 md:mr-8"
        >
          فواصل المستقبل
        </motion.span>
      </div>

      <div className="details-and-logo-container p-5 md:p-9  lg:left-16 top-2/3 lg:top-52">
        <motion.div
          transition={{ duration: 1.2 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="logo-container w-4/6 md:w-7/12 p-12 md:p-12"
        >
          <Logo className="partner-details-logo w-20 " />
        </motion.div>

        <motion.div
          transition={{ duration: 1.2 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="details-container"
        >
          {derailsData.map(({ Icon, text, href }) => (
            <motion.a href={href} className="details-text text-lg">
              <Icon className="details-icon" />
              {text}
            </motion.a>
          ))}
        </motion.div>
      </div>
      <div className="google-map-container w-11/12 lg:w-2/5 xl:w-2/4  h-1/3 self-center lg:self-end 2xl:w-3/5  lg:h-2/3  lg:mr-12 xl:mr-24  mt-16 lg:mt-8">
        <iframe
          title="Partners locations"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59982.395917305126!2d41.495147351755044!3d20.012722007789492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ef459576d00615%3A0x502c5b028b9e526d!2z2KfZhNio2KfYrdipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1631402197667!5m2!1sar!2seg"
          className="google-map"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PartnerDetailsPage;