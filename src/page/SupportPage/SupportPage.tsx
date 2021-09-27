import { ReactElement } from "react";

import ReactPageScroller from "react-page-scroller";
import QuestionsPage from "../../components/SupportPage/QuestionsPage";
import ComplaintPage from "../../components/SupportPage/ComplaintPage";
import ContactUsPage from "../../components/SupportPage/ContactUsPage";

import "./SupportPage.scss";

const SupportPage = (): ReactElement => {
  return (
    <ReactPageScroller>
      <QuestionsPage />
      <ComplaintPage />
      <ContactUsPage />
    </ReactPageScroller>
  );
};

export default SupportPage;
