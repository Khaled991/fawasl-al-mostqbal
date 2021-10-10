import { ReactElement } from "react";
import { answers } from "../supportPageData";
import "../SupportPage.scss";
import { questions } from "./../supportPageData";

export default function AnswerOfQuestion({ match }: any): ReactElement {
  const { id } = match.params;
  const [lastWord, restWords] = splitQuestionTitleToLastWordAndRestWords(id);

  const sentanceWithoutLastWord = restWords.join(" ");

  return (
    <div className="questions-page-container">
      <div className="popular-question-text">
        <div className="title-green-border-text-container">
          <span className="title-green-text">{lastWord}</span>
          <div className="title-green-border" />
        </div>
        <div className="title-black-border-text-container">
          <span className="title-black-text">{sentanceWithoutLastWord}</span>
          <div className="title-black-border" />
        </div>
      </div>
      <div className="whitespace-pre-line text-2xl w-full" dir="rtl">
        {answers[id]}
      </div>
    </div>
  );
}

function splitQuestionTitleToLastWordAndRestWords(
  id: number
): [string, string[]] {
  const questionWords = questions[id].split(" ");
  const lastWord = questionWords.pop()!;
  const restWords = questionWords;

  return [lastWord, restWords];
}
