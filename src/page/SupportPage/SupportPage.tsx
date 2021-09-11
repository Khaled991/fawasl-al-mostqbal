import { ReactElement } from "react";
import "./SupportPage.scss";
import questions from "./supportPageData";
import ReactPageScroller from "react-page-scroller";
import chatIcon from "../../assets/Icons/chat.svg";

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
        <span className="questions-text flex flex-col" style={{ fontSize: 25 }}>
          - {questionText}{" "}
        </span>
      );
  }

  function renderQuestionsBlock(
    questionsElements: ReactElement[]
  ): ReactElement {
    return <div>{questionsElements}</div>;
  }

  function QuestionsPage(): ReactElement {
    return (
      <div className="questions-page-container pr-32">
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

  function ComplaintPage(): ReactElement {
    return (
      <div
        className="bg-bottom-circle w-screen h-screen pr-32 grid grid-cols-2 gap-20 d1"
        dir="rtl"
      >
        <div className="flex  justify-center items-center">
          <div className="w-10/12 flex flex-col">
            <div className="text-5xl font-bold mb-4">
              تقديم <span className="text-primary">شكوى</span>
            </div>
            <input placeholder="الاسم" className="custom-input" />
            <input
              placeholder="البريد الإلكتروني"
              className="custom-input"
              type="email"
            />
            <textarea
              className="custom-input"
              cols={30}
              rows={10}
              placeholder="تفاصيل الشكوى"
            ></textarea>
            <button className="custom-button w-44">إرسال</button>
          </div>
        </div>
        <div className="bg-complaint bg-no-repeat bg-center w-11/12" />
      </div>
    );
  }

  function ContactUsPage(): ReactElement {
    return (
      <div className="w-screen h-screen pr-32 grid grid-cols-2 d1" dir="rtl">
        <div className="bg-chat bg-no-repeat bg-bottom bg-contain" />
        <div className="flex justify-center items-center">
          <div className="w-10/12 flex flex-col items-center">
            <div className="text-5xl font-bold mb-4 text-center leading-snug">
              <div>
                يمكنك التحدث مع أحد ممثلي{" "}
                <span className="text-primary">خدمة العملاء</span> إن لم تجد حل
                لمشكلتك <div>نحن نعمل على الدوام</div>{" "}
                <span className="text-primary">٢٤</span> ساعة
              </div>
            </div>
            <button className="custom-button flex justify-center px-20 w-3/4 items-center">
              <img src={chatIcon} alt="chat icon" className="h-6 ml-3" />
              فتح محادثة
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ReactPageScroller>
      <QuestionsPage />
      <ComplaintPage />
      <ContactUsPage />
    </ReactPageScroller>
  );
};

export default SupportPage;
