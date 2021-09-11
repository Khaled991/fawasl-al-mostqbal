import { ReactElement } from "react";
import "./SupportPage.scss";
import questions from "./supportPageData";

const SupportPage = (): ReactElement => {
  const RenderQuestions = (): ReactElement[] => {
    const questionsBlocks = [];
    for (let i = 0; i < questions.length; i += 3) {
      const blockElements = questions.slice(i, i + 3);
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
    <div className="support-page">
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
  );
};

export default SupportPage;
