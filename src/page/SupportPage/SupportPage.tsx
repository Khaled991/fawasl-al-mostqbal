import { ReactElement } from "react";
import "./SupportPage.scss";
import questions from "./supportPageData";
import ReactPageScroller from "react-page-scroller";

const SupportPage = (): ReactElement => {
  const RenderQuestions = (): ReactElement[] => {
    const questionsBlocks = [];
    const blockItemsCount = 3;
    for (let i = 0; i < questions.length; i += blockItemsCount) {
      const blockElements = questions.slice(i, i + blockItemsCount);
      const questionsBlockArray = renderQuestionsBlockArray(blockElements);
      const questionsBlockElement = renderQuestionsBlock(questionsBlockArray);
      questionsBlocks.push(questionsBlockElement);
    }

    return questionsBlocks;
  };

  function renderQuestionsBlockArray(questions: string[]) {
    const questionsBlockArray = [];

    for (let i = 0; i < questions.length; i++) {
      const questionElement = renderQuestion(questions[i]);
      if (questionElement != null) questionsBlockArray.push(questionElement);
    }

    return questionsBlockArray;
  }

  function renderQuestion(questionText: string): ReactElement | undefined {
    if (questionText)
      return (
        <span className="questions-text flex flex-col">- {questionText} </span>
      );
  }

  function renderQuestionsBlock(
    questionsElements: ReactElement[]
  ): ReactElement {
    return <div>{questionsElements}</div>;
  }

  return (
    <ReactPageScroller>
      <div className="support-page pr-32">
        <div className="popular-question-text">
          <div className="title-green-border-text-container">
            <span className="title-green-text">شيوعاً</span>
            <div className="title-green-border" />
          </div>
          <div className="title-black-border-text-container">
            <span className="title-black-text">المواضيع الأكثر</span>
            <div className="title-black-border" />
          </div>
        </div>
        <div className="questions-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {RenderQuestions()}
        </div>
      </div>
      <div className="support-page  pr-32">
        <div className="popular-question-text">
          <div className="title-green-border-text-container">
            <span className="title-green-text">شيوعاً</span>
            <div className="title-green-border" />
          </div>
          <div className="title-black-border-text-container">
            <span className="title-black-text">المواضيع الأكثر</span>
            <div className="title-black-border" />
          </div>
        </div>
        <div className="questions-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {RenderQuestions()}
        </div>
      </div>
    </ReactPageScroller>
  );
};

export default SupportPage;
