import { ReactElement } from 'react';
import './SupportPage.scss';

const SupportPage = (): ReactElement => {
  const questions = Array.from({ length: 100 }).map(() => 'طريقة التثبيت');

  const RenderQuestions = (): ReactElement[] => {
    const questionsBlocks = [];
    for (let i = 0; i < questions.length; i += 3) {
      const questionsBlockArray = [];
      for (let j = i; j < i + 3; j++) {
        const questionElement = renderQuestion(questions[j]);
        questionsBlockArray.push(questionElement);
      }
      const questionsBlockElement = renderQuestionsBlock(questionsBlockArray);
      questionsBlocks.push(questionsBlockElement);
    }

    function renderQuestion(questionText: string): ReactElement {
      return <span className="questions-text">{questionText}</span>;
    }

    function renderQuestionsBlock(questionsElements: ReactElement[]) {
      return <div>{questionsElements}</div>;
    }

    return questionsBlocks;
  };

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
      <div className="questions-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {/* {Array.from({ length: 100 }).map(() => (
          <span className="questions-text">- طريقة التثبيت</span>
        ))} */}
        {RenderQuestions}
      </div>
    </div>
  );
};

export default SupportPage;
