import { ReactElement } from "react";
import "./SupportPage.scss";

import ReactPageScroller from "react-page-scroller";
import QuestionsPage from "./SupportPages/QuestionsPage";
import ComplaintPage from "./SupportPages/ComplaintPage";
import ContactUsPage from "./SupportPages/ContactUsPage";

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
