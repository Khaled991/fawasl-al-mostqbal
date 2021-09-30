import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { questions } from "../../page/SupportPage/supportPageData";

export default function QuestionsPage(): ReactElement {
  return (
    <div className="questions-page-container pb-8 md:pt-8">
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
}

const RenderQuestions = (): ReactElement[] => {
  const questionsBlocks = [];
  const blockItemsCount = 3;
  for (let i = 0; i < questions.length; i += blockItemsCount) {
    const blockElements = questions.slice(i, i + blockItemsCount);
    const questionsBlockArray = renderQuestionsBlockArray(blockElements);

    const blockId = i / blockItemsCount;
    const questionsBlockElement = renderQuestionsBlock(
      questionsBlockArray,
      blockId
    );
    questionsBlocks.push(questionsBlockElement);
  }

  return questionsBlocks;
};

function renderQuestionsBlockArray(questions: string[]) {
  const questionsBlockArray = [];

  for (let i = 0; i < questions.length; i++) {
    const questionElement = renderQuestion(i);
    if (questionElement != null) questionsBlockArray.push(questionElement);
  }

  return questionsBlockArray;
}

function renderQuestion(index: number): ReactElement | undefined {
  const questionText = questions[index];
  if (questionText)
    return (
      <Link key={index} to={`support/AnswerOfQuestion/${index}`}>
        <span className="questions-text flex flex-col" style={{ fontSize: 25 }}>
          - {questionText}{" "}
        </span>
      </Link>
    );
}

function renderQuestionsBlock(
  questionsElements: ReactElement[],
  blockId: number
): ReactElement {
  return <div key={blockId}>{questionsElements}</div>;
}
